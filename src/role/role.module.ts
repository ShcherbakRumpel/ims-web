import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { rolesProviders } from './role.providers';
import { RolesService } from './role.service';
import { RolesController } from './role.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [RolesController],
  providers: [RolesService, ...rolesProviders],
  exports: [RoleModule, RolesService],

})
export class RoleModule {}
