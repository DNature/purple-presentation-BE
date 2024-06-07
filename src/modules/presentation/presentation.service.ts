import { Inject, Injectable } from '@nestjs/common';
import { CreatePresentationDto } from './dto/create-presentation.dto';
import { UpdatePresentationDto } from './dto/update-presentation.dto';
import { Repository } from 'typeorm';
import { Presentation } from './entities/presentation.entity';

@Injectable()
export class PresentationService {
  constructor(
    @Inject('PRESENTATION_REPOSITORY')
    private presentationRepository: Repository<Presentation>,
  ) {}

  create(createPresentationDto: CreatePresentationDto) {
    return this.presentationRepository.save(createPresentationDto);
  }

  findAll() {
    return this.presentationRepository.find({ relations: ['pages'] });
  }

  findOne(id: string) {
    return this.presentationRepository.findOne({ where: { id } });
  }

  update(id: string, updatePresentationDto: UpdatePresentationDto) {
    this.presentationRepository.update(id, updatePresentationDto);
    return this.findOne(id);
  }

  remove(id: string) {
    this.presentationRepository.delete(id);
  }
}
