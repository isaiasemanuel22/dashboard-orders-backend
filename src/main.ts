import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getEnvPath } from './helper/getFilePath';

async function bootstrap() {
  Logger.log(process.env.NODE_ENV);
  Logger.log(getEnvPath(`${__dirname}/environments`));
  const port = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule , {cors:true});
  app.enableCors();
  await app.listen(port);
  



}
bootstrap();
