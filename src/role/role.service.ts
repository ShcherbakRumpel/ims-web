import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { RoleDto } from '../dto/role.dto';
import { RoleInterface } from '../interfaces/role.interface';

@Injectable()
export class RolesService {
  constructor(@Inject('ROLE_MODEL') private readonly roleModel: Model<RoleInterface>) {}

  async create(roleDto: RoleDto): Promise<RoleInterface> {
    const createdRole = new this.roleModel(roleDto);
    return await createdRole.save();
  }

  async edit(roleDto: RoleDto): Promise<RoleInterface> {
    try {
      return await this.roleModel.findOneAndUpdate({
          _id: Types.ObjectId(roleDto.roleId),
        },
        {
          name: roleDto.name,
          permissions: roleDto.permissions,
        },
      );
    } catch ( er ) {
      return er;
    }
  }

  async findAll(): Promise<RoleInterface[]> {
    return await this.roleModel.find().exec();
  }
}
