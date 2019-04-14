import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CountryInterface } from '../interfaces/country.interface';
import { CountryDto } from '../dto/country.dto';

@Injectable()
export class CountriesService {
  constructor(@Inject('COUNTRY_MODEL') private readonly countryModel: Model<CountryInterface>) {}

  async create(countryDto: CountryDto): Promise<CountryInterface> {
    const createdCountry = new this.countryModel(countryDto);
    return await createdCountry.save();
  }

  async findAll(): Promise<CountryInterface[]> {
    return await this.countryModel.find().exec();
  }
}
