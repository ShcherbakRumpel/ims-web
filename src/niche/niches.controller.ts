
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateNicheDto } from '../dto/create-niche.dto';
import { NichesService } from './niches.service';
import { Niche } from '../interfaces/niche.interface';

@Controller('niches')
export class NichesController {
    constructor(private readonly nichesService: NichesService) {}

    @Post()
    async create(@Body() createCatDto: CreateNicheDto) {
      this.nichesService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Niche[]> {
      return this.nichesService.findAll();
    }
}
