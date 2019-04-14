import { Module } from '@nestjs/common';
import { NichesModule } from './niche/niches.module';
import { UsersModule } from './user/users.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { CountryModule } from './country/country.module';

@Module({
  imports:
    [
      NichesModule,
      UsersModule,
      AuthModule,
      RoleModule,
      PermissionModule,
      CountryModule,
    ],
})
export class AppModule { }
