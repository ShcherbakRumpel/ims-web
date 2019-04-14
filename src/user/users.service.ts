import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UserCreate } from '../interfaces/user.interface';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CountrySchema } from '../schemas/coutry.schema';
import { RoleSchema } from '../schemas/role.scema';
@Injectable()
export class UsersService {
  private saltRounds = 10;
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<UserCreate>) { }

  async create(userDTO: CreateUserDTO) {
    userDTO.activateDate = new Date(new Date(Date.now()).toISOString());
    const createdUser = new this.userModel(userDTO);

    createdUser.password = await this.getHash(createdUser.password);

    // clear password as we don't persist passwords

    return await createdUser.save();
  }
  async findAll(): Promise<UserCreate[]> {
    const Role = mongoose.model('Role', RoleSchema);
    const Country = mongoose.model('Country', CountrySchema);

    return await this.userModel.find({})
      .populate({
        path: 'role',
        model: Role,
    })
      .populate({
        path: 'country',
        model: Country,
      })
    .exec();
  }

  async getUserByEmail(emailFromReq: string): Promise<UserCreate> {
    const result =
      await this.userModel.findOne({ email: emailFromReq });
    if (!result) { throw new Error('No user found'); }
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
