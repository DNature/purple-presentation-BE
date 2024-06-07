import { Module } from '@nestjs/common';
import { PresentationService } from './presentation.service';
import { PresentationController } from './presentation.controller';
import { presentationProviders } from './presentation.providers';

@Module({
  controllers: [PresentationController],
  providers: [PresentationService, ...presentationProviders],
})
export class PresentationModule {}
