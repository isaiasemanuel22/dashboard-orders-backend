import { CRUD } from "src/CRUD/crud";
import { CreateProductDTO } from "../models/dtos/createproductDTO";

export interface ProductsDAO extends CRUD<CreateProductDTO>{
    
}