import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { swaggerConfig } from './config/swagger-config';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  app.setGlobalPrefix('/api/v1');
  SwaggerModule.setup('/api/v1/api-docs', app, document);

  await app.listen(PORT);

  console.log(`Server start on ${PORT}`);
}
bootstrap();
