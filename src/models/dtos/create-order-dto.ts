
export enum Status {
  ToDo = 'toDo',
  InProgress = 'inProgress',
  Cancelled = 'cancelled',
  Finished = 'finished'
}
export class CreateOrderDto {
  id?: number;
  name?: string;
  client: string;
  description: string;
  lastUpdate: Date;
  dateAdmission: Date;
  dateDelivery?:Date;
  status?:Status;
  reserve:boolean;
  amountReserve?:number;
  cost?: number;
  numberOrder?:number;
}
