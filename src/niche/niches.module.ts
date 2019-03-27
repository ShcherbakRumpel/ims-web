import { Module } from '@nestjs/common';
import { NichesController } from './niches.controller';
import { NichesService } from './niches.service';
import { nichesProviders } from './niches.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NichesController],
  providers: [NichesService, ...nichesProviders],
})
export class NichesModule {}
