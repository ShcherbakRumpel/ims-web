import * as bcrypt from 'bcrypt';

export class CreateUserDTO {
  readonly lastName: string;
  readonly firstName: string;
  readonly email: string;
  password: string;
  readonly birthDay: Date;

  checkPassword = function(attempt, callback) {

    const user = this;

    bcrypt.compare(attempt, user.password, (err, isMatch) => {
      if (err) { return callback(err); }
      callback(null, isMatch);
    });

  };
}
