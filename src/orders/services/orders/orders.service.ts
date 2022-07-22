import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from 'src/orders/dto/create-order-dto';
import { Order } from 'src/orders/entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async getAll() {
    return await this.orderRepository.find();
  }

  async createOrder(orderDto: CreateOrderDto) {
    const newOrder = new Order();
    newOrder.name = orderDto.name;
    newOrder.date = orderDto.date;
    newOrder.client = orderDto.client;
    newOrder.description = orderDto.description;

    return await this.orderRepository.save(newOrder);
  }

  async updateOrder(id: number, orderUpdate: CreateOrderDto) {
    const orderUpdateNew = await this.orderRepository.findOne({
      where: { id: id },
    });
    orderUpdateNew.name = orderUpdate.name;
    orderUpdateNew.date = orderUpdate.date;
    orderUpdateNew.client = orderUpdate.client;
    orderUpdateNew.description = orderUpdate.description;

    return await this.orderRepository.save(orderUpdateNew);
  }

  async deleteOrder(idOrder: number) {
    return await this.orderRepository.delete(idOrder);
  }
}
