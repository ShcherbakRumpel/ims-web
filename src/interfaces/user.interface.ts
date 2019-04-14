import { Document, Types } from 'mongoose';
import { RoleDto } from '../dto/role.dto';
import { ObjectId } from '../../node_modules/@types/bson';
import { CountryInterface } from './country.interface';
import { RoleInterface } from './role.interface';

export interface UserCreate extends Document {
  readonly lastName: string;
  readonly firstName: string;
  readonly email: string;
  password: string;
  activateDate: Date;
  configurationStep: number;
  numberOfFolowers: number;
  role: RoleInterface;
  country: CountryInterface[];
  isCompleteProfileConfiguration: boolean;
}
