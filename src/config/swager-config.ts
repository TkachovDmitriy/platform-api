import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('SImple Platform App')
  .setDescription('Documentation for REST API')
  .setVersion('1.0.0')
  .addTag('API')
  .build();
