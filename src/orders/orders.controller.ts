import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order-dto';
import { OrdersService } from './services/orders/orders.service';

@Controller()
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto, @Res() response) {
    this.orderService
      .createOrder(createOrderDto)
      .then((message) => {
        response.status(HttpStatus.CREATED).json(message);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mesagge: 'error en la creacion del mensaje' });
      });
  }

  @Get()
  getAll(@Res() response) {
    this.orderService
      .getAll()
      .then((ordersList) => {
        response.status(HttpStatus.OK).json(ordersList);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: 'Error en la obtencion de mensajes' });
      });
  }

  @Put(':id')
  update(
    @Body() updateOrderDto: CreateOrderDto,
    @Res() response,
    @Param('id') idOrder,
  ) {
    this.orderService
      .updateOrder(idOrder, updateOrderDto)
      .then((newOrder) => {
        response.status(HttpStatus.OK).json(newOrder);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: 'Error al actualizar la orden' });
      });
  }

  @Delete()
  detele(@Res() response, @Param('id') idOrder) {
    this.orderService
      .deleteOrder(idOrder)
      .then(() => {
        response
          .status(HttpStatus.OK)
          .json({ mesagge: 'Orden eliminada correctamente' });
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: 'Error al eliminar la orden' });
      });
  }
}
