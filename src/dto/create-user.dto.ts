import * as bcrypt from 'bcrypt';

export class CreateUserDTO {
  readonly lastName: string;
  readonly firstName: string;
  readonly email: string;
  password: string;
  activateDate: Date;
  configurationStep: number;
  numberOfFolowers: number;
  role: string;
  countries: string[];
  isCompleteProfileConfiguration: boolean;
}
