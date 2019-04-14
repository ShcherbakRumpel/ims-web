import { Document } from 'mongoose';
import { RoleDto } from '../dto/role.dto';

export interface UserCreate extends Document {
  readonly lastName: string;
  readonly firstName: string;
  readonly email: string;
  password: string;
  activateDate: Date;
  configurationStep: number;
  numberOfFolowers: number;
  role: string;
  countries: any[];
  isCompleteProfileConfiguration: boolean;
}
