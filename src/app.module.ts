import { Module } from '@nestjs/common';
import { NichesModule } from './niche/niches.module';

@Module({
  imports:
  [NichesModule],
})
export class AppModule {}
