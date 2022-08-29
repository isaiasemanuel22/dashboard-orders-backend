
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Status {
  ToDo = 'toDo',
  InProgress = 'inProgress',
  Cancelled = 'cancelled',
  Finished = 'finished'
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column()
  lastUpdate: Date;

  @Column()
  dateAdmission: Date;

  @Column({ nullable: true})
  dateDelivery:Date;

  @Column()
  client: string;

  @Column({ nullable: true })
  description: string;

  @Column({default:'toDo'})
  status:Status;
}
