import { Module } from '@nestjs/common';
import { NichesModule } from './niche/niches.module';
import { UsersModule } from './user/users.module';
import { AuthService } from './auth/auth.service';
import { UsersService } from './user/users.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports:
    [NichesModule, UsersModule, AuthModule],
})
export class AppModule { }
