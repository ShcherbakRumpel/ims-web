import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateNicheDto } from '../dto/create-niche.dto';
import { Niche } from '../interfaces/niche.interface';

@Injectable()
export class NichesService {
  constructor(@Inject('NICHE_MODEL') private readonly nicheModel: Model<Niche>) {}

  async create(createCatDto: CreateNicheDto): Promise<Niche> {
    const createdNiche = new this.nicheModel(createCatDto);
    return await createdNiche.save();
  }

  async findAll(): Promise<Niche[]> {
    return await this.nicheModel.find().exec();
  }
}
