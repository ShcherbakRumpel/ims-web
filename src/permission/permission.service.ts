import { Inject, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { PermissionInterface } from '../interfaces/permission.interface';
import { PermissionDto } from '../dto/permission.dto';

@Injectable()
export class PermissionsService {
  constructor(@Inject('PERMISSION_MODEL') private readonly permissionModel: Model<PermissionInterface>) {}

  async create(permissionDto: PermissionDto): Promise<PermissionInterface> {
    const createdPermission = new this.permissionModel(permissionDto);
    return await createdPermission.save();
  }

  async edit(permissionDto: PermissionDto): Promise<PermissionInterface> {
    try {
      return await this.permissionModel.findOneAndUpdate({
          _id: Types.ObjectId(permissionDto.permissionId),
        },
        {
          name: permissionDto.name,
        },
      );
    } catch ( er ) {
      return er;
    }
  }

  async findAll(): Promise<PermissionInterface[]> {
    return await this.permissionModel.find().exec();
  }
}
