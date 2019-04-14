
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PermissionInterface } from '../interfaces/permission.interface';
import { PermissionDto } from '../dto/permission.dto';
import { CountriesService } from './country.service';
import { CountryDto } from '../dto/country.dto';
import { CountryInterface } from '../interfaces/country.interface';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) { }

  @Post()
  async create(@Body() createCountry: CountryDto) {
    await this.countriesService.create(createCountry);
  }

  @Get()
  async findAll(): Promise<CountryInterface[]> {
    return this.countriesService.findAll();
  }
}
