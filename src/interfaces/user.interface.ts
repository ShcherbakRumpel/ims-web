import { Document } from 'mongoose';

export interface UserCreate extends Document {
  readonly lastName: string;
  readonly firstName: string;
  readonly email: string;
  password: string;
  readonly birthDay: Date;
}
