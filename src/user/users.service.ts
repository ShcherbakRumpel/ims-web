import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UserCreate } from '../interfaces/user.interface';

import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  private saltRounds = 10;
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<UserCreate>) { }

  async create(userDTO: CreateUserDTO) {
    const createdUser = new this.userModel(userDTO);

    createdUser.password = await this.getHash(createdUser.password);

    // clear password as we don't persist passwords

    return await createdUser.save();
  }
  async findAll(): Promise<UserCreate[]> {
    return await this.userModel.find().exec();
  }

  async getUserByEmail(emailFromReq: string): Promise<UserCreate> {
    const result =
      await this.userModel.findOne({ email: emailFromReq });
    if (!result) { throw new Error('No user found'); }
    console.log(result);
    return result;
  }
  async getHash(password: string | undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }
  async compareHash(
    password: string | undefined,
    hash: string | undefined,
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
