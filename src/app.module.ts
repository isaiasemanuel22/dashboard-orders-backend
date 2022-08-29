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

const envFilePath: string = getEnvPath(`${__dirname }/envi`);
Logger.log(envFilePath);
Logger.log(process.env.DB_HOST);
Logger.log(process.env.DB_USERNAME);
Logger.log(process.env.DB_PASS);
Logger.log(process.env.DB_NAME);
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
      //migrationsRun:true,
      //migrations:[__dirname + './migrations/**/*{.ts,.js}'],
      //migrationsTableName:'migratios-typeorm',
    }),
    TypeOrmModule.forFeature([Order]),
  ],
  controllers: [OrdersController, ClientsController, ProductsController],
  providers: [OrdersService, ClientsService, ProductsService],
})
export class AppModule {

}
