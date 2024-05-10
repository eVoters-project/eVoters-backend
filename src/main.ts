import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
import { VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(json({ limit: '30mb' }));

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'api/v',
  });

  const config = new DocumentBuilder()
    .setTitle('E - Voters API')
    .setDescription('Api for E - Voters App')
    .setVersion('')
    .addTag('')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs/swagger', app, document);

  await app.listen(3000);
}
bootstrap();
