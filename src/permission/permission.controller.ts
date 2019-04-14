
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PermissionInterface } from '../interfaces/permission.interface';
import { PermissionsService } from './permission.service';
import { PermissionDto } from '../dto/permission.dto';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) { }

  @Post()
  async create(@Body() createPermission: PermissionDto) {
    await this.permissionsService.create(createPermission);
  }

  @Post('edit')
  async edit(@Body() permission: PermissionDto) {
    await this.permissionsService.edit(permission);
  }

  @Get()
  async findAll(): Promise<PermissionInterface[]> {
    return this.permissionsService.findAll();
  }
}
