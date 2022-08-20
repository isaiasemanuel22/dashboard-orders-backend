import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './orders/entities/order.entity';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/services/orders/orders.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'us-cdbr-east-06.cleardb.net',
      port: 3306,
      username: 'b4b029101002b8',
      password: 'a3da4e09',
      database: 'heroku_210bd7de6abd62f',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Order]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class AppModule {}
