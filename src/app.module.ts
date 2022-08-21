import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getEnvPath } from './helper/getFilePath';
import { Order } from './orders/entities/order.entity';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/services/orders/orders.service';

const envFilePath: string = getEnvPath(`${__dirname}/environments`);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Order]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class AppModule {}
