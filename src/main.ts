import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './config/swager-config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  app.setGlobalPrefix('/api/v1');

  SwaggerModule.setup('/api/v1/api-docs', app, document);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
