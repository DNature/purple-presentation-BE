import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );

    // API Versioning
    app.enableVersioning({
      type: VersioningType.URI,
    });

    // Validation pipe
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    // Swagger
    const config = new DocumentBuilder()
      .setTitle('Presentation Management API')
      .setDescription('API documentation for managing presentations')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    const PORT = 9000;
    const HOST = '0.0.0.0';
    await app.listen(PORT, HOST);

    console.log(`Running in ${HOST} %n Running on Port ${PORT}`);
  } catch (error) {
    // TODO: handle error with logger
    console.error('Error starting server', error);
  }
}
bootstrap();
