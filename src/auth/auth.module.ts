import * as passport from 'passport';
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { NichesModule } from '../niche/niches.module';
import { NichesController } from '../niche/niches.controller';
import { UsersModule } from '../user/users.module';
import { DatabaseModule } from '../database/database.module';
import { UsersService } from '../user/users.service';
import { JwtService, JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({

  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UsersModule, DatabaseModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule { }
