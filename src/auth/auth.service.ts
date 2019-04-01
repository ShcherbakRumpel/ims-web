import { Injectable, UnauthorizedException } from '@nestjs/common';

import { LoginUserDto } from '../dto/login-user.dto';
import { UsersService } from '../user/users.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService, private jwtService: JwtService) {

  }

  async validateUserByPassword(loginAttempt: LoginUserDto) {

    // This will be used for the initial login
    const userToAttempt = await this.usersService.getUserByEmail(loginAttempt.email);
    if (!userToAttempt) { throw new Error('No user found'); } else {
      return new Promise((resolve) => {

        // Check the supplied password against the hash stored for this email address
        // tslint:disable-next-line:no-shadowed-variable
        // tslint:disable-next-line:no-unused-expression
        this.checkPassword(userToAttempt, loginAttempt.password, (err, isMatch) => {

          if (err) { throw new UnauthorizedException(); }

          if (isMatch) {
            // If there is a successful match, generate a JWT for the user
            return resolve(this.createJwtPayload(userToAttempt));

          } else {
            throw new UnauthorizedException();
          }

        });
      });
    }

  }

  async validateUserByJwt(payload: JwtPayload) {

    // This will be used when the user has already logged in and has a JWT
    const user = await this.usersService.getUserByEmail(payload.email);

    if (user) {
      return this.createJwtPayload(user);
    } else {
      throw new UnauthorizedException();
    }

  }

  createJwtPayload(user) {

    const data: JwtPayload = {
      email: user.email,
    };

    const jwt = this.jwtService.sign(data);

    return {
      expiresIn: 3600,
      token: jwt,
    };

  }

  // tslint:disable-next-line:only-arrow-functions
  checkPassword(user, attempt, callback) {
    console.log(user);
    console.log(attempt);
    console.log(callback);

    bcrypt.compare(attempt, user.password, (err, isMatch) => {
      if (err) { return callback(err); }
      callback(null, isMatch);
    });
  }

}
