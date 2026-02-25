import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Update CORS to allow your frontend domains
  app.enableCors({
    origin: [
      'https://personal-website-finals-z85z.vercel.app',  // Your frontend
      'http://localhost:5173',                             // Local development
      'http://localhost:3000'                               // Local backend
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();