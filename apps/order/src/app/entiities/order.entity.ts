import { Entity, Column, ObjectIdColumn } from 'typeorm';




export enum OrderStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  ONGOING = 'ONGOING',
}


@Entity()
export class Order {
  @ObjectIdColumn()
  id: string;

  @Column()
  status: OrderStatus;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: null, nullable: true })
  updatedAt: Date;

}
