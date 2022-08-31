import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Logger,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateOrderDto } from '../models/dtos/create-order-dto';
import { OrdersService } from '../services/orders.service';

@Controller('orders')
export class OrdersController {

  constructor(private orderService: OrdersService) { }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto, @Res() response) {

    this.orderService.getMaxOrder().then((maxOrder) => {

      Logger.log(maxOrder);
      createOrderDto.numberOrder = maxOrder != null ? maxOrder.max + 1 : 1;

      this.orderService
        .add(createOrderDto)
        .then((message) => {
          response.status(HttpStatus.CREATED).json(message);
        })
        .catch((e) => {
          response
            .status(HttpStatus.FORBIDDEN)
            .json({ mesagge: 'Error en la creacion de la orden', status: e });
        });
    }).catch(()=>{
      response.status(HttpStatus.FORBIDDEN).json({ message:'No se pudo encontrar el numero de orden'});
    })
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
          .json({ message: 'Error en la obtencion de Ordenes' });
      });
  }

  @Put(':id')
  update(
    @Body() updateOrderDto: CreateOrderDto,
    @Res() response,
    @Param('id') idOrder,
  ) {
    this.orderService
      .update(idOrder, updateOrderDto)
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
      .delete(idOrder)
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



  @Get('max-oder')
  getMaxOrder(@Res() response) {
    this.orderService.getMaxOrder().then((IdOrder) => {
      response.status(HttpStatus.OK).json({ idOrder: IdOrder });
    }).catch((e) => {
      response.status(HttpStatus.FORBIDDEN).json({ message: 'Error al obtener el numero de orden' });
    })
  }
}
