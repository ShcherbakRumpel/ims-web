import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CountriesController } from './country.controller';
import { countriesProviders } from './country.providers';
import { CountriesService } from './country.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CountriesController],
  providers: [CountriesService, ...countriesProviders],
  exports: [CountryModule, CountriesService],
})
export class CountryModule {}
