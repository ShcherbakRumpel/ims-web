
import { Controller, Get, Post, Body } from '@nestjs/common';
import { RoleDto } from '../dto/role.dto';
import { RoleInterface } from '../interfaces/role.interface';
import { RolesService } from './role.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) { }

  @Post()
  async create(@Body() createRole: RoleDto) {
    await this.rolesService.create(createRole);
  }

  @Post('edit')
  async edit(@Body() role: RoleDto) {
    await this.rolesService.edit(role);
  }

  @Get()
  async findAll(): Promise<RoleInterface[]> {
    return this.rolesService.findAll();
  }
}
