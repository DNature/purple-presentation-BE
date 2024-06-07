import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PresentationModule } from './modules/presentation/presentation.module';
import { PageModule } from './modules/page/page.module';
import { ContentModule } from './modules/content/content.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [PresentationModule, PageModule, ContentModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
