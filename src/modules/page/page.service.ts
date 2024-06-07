import { Inject, Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { Repository } from 'typeorm';
import { Page } from './entities/page.entity';

@Injectable()
export class PageService {
  constructor(
    @Inject('PAGE_REPOSITORY')
    private pageRepository: Repository<Page>,
  ) {}

  create({ presentationId, ...createPageDto }: CreatePageDto) {
    return this.pageRepository.save({
      ...createPageDto,
      presentation: { id: presentationId },
    });
  }

  findAll(presentationId: string) {
    return this.pageRepository.find({
      where: {
        presentation: {
          id: presentationId,
        },
      },
      relations: ['contents'],
    });
  }

  findOne(id: string) {
    return this.pageRepository.findOne({ where: { id } });
  }

  // find one by presentation
  findOneByPresentation(presentationId: string) {
    return this.pageRepository.findOne({
      where: { presentation: { id: presentationId } },
    });
  }

  update(id: string, updatePageDto: UpdatePageDto) {
    this.pageRepository.update(id, updatePageDto);
    return this.findOne(id);
  }

  remove(id: string) {
    this.pageRepository.delete(id);
  }
}
