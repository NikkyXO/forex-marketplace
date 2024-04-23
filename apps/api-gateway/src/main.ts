
import { Logger, ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import ValidationExceptions from './app/exceptions/validations.exceptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    {
      cors: true,
    }
  );

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[]) =>
        new ValidationExceptions(errors),
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('forex MarketPlace')
    .setDescription('forex MarketPlace')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      description: 'Input your bearer token here',
      name: 'authorization',
      in: 'header'
    })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document)

  const port = 3331;
  await app.listen(port);
  Logger.log(
    `🚀api gateway Application is running on: http://localhost:${port}`
  );
}

bootstrap();
