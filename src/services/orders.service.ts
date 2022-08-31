import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from 'src/models/dtos/create-order-dto';
import { Order } from '../models/entities/order.entity';
import { Repository } from 'typeorm';
import {OrdersServicesDao} from '../DAOS/orders.servicesDAO';

@Injectable()
export class OrdersService implements OrdersServicesDao{
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}


  async add(instance: CreateOrderDto) {
    const newOrder = {...instance} as Order;

    return this.orderRepository.save(newOrder);
  }
  async getAll() {
    return this.orderRepository.find();
  }
  async update(id: number, instance: CreateOrderDto) {
    
    let orderUpdateNew = await this.orderRepository.findOne({
      where: { id: id },
    });
    orderUpdateNew.name = instance.name;
    orderUpdateNew.description = instance.description;
    orderUpdateNew.client = instance.client;
    orderUpdateNew.lastUpdate = instance.lastUpdate;
    orderUpdateNew.dateAdmission = instance.dateAdmission;
    orderUpdateNew.dateDelivery = instance.dateDelivery;
    orderUpdateNew.status = instance.status;
    orderUpdateNew.reserve = instance.reserve;
    orderUpdateNew.amountReserve = instance.amountReserve;
    orderUpdateNew.cost = instance.cost;
    
    return this.orderRepository.save(orderUpdateNew);
  }
   async delete(id: number) {
    return this.orderRepository.delete(id);
  }

  async getOne(idOrder: number) {
    return this.orderRepository.findOne({where:{id: idOrder}});
  }


  async getMaxOrder(){
  return this.orderRepository.createQueryBuilder("order").select("MAX(order.numberOrder)", "max").getRawOne();
  }
}
