import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PermissionsService } from './permission.service';
import { permissionsProviders } from './permission.providers';
import { PermissionsController } from './permission.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PermissionsController],
  providers: [PermissionsService, ...permissionsProviders],
  exports: [PermissionModule, PermissionsService],

})
export class PermissionModule {}
