import { Types } from 'mongoose';

export class RoleDto {
    roleId: string;
    name: string;
    permissions: string[];
  }
