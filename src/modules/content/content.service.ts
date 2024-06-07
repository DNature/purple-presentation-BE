import { Inject, Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Content } from './entities/content.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContentService {
  constructor(
    @Inject('CONTENT_REPOSITORY')
    private contentRepository: Repository<Content>,
  ) {}
  create({ pageId, ...createContentDto }: CreateContentDto) {
    return this.contentRepository.save({
      ...createContentDto,
      page: { id: pageId },
    });
  }

  findAll() {
    return this.contentRepository.find();
  }

  findOne(id: string) {
    return this.contentRepository.findOne({ where: { id } });
  }

  update(id: string, updateContentDto: UpdateContentDto) {
    this.contentRepository.update(id, updateContentDto);
    return this.findOne(id);
  }

  remove(id: string) {
    this.contentRepository.delete(id);
  }
}
