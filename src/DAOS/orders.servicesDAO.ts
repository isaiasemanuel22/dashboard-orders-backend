import {CRUD} from "../CRUD/crud";
import {CreateOrderDto} from "../models/dtos/create-order-dto"

export interface OrdersServicesDao extends CRUD<CreateOrderDto>{
    
}