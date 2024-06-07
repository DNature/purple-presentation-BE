import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { contentProviders } from './content.providers';

@Module({
  controllers: [ContentController],
  providers: [ContentService, ...contentProviders],
})
export class ContentModule {}
