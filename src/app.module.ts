import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getEnvPath } from './helper/getFilePath';
import { Order } from './models/entities/order.entity';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { ClientsController } from './controllers/clients.controller';
import { ClientsService } from './services/clients.service';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { MysqlDataSource } from '../data-source';
const envFilePath: string = getEnvPath(`${__dirname }/envi`);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRoot(MysqlDataSource.options),
    TypeOrmModule.forFeature([Order]),
  ],
  controllers: [OrdersController, ClientsController, ProductsController],
  providers: [OrdersService, ClientsService, ProductsService],
})
export class AppModule {

}
