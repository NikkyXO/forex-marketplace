import { Entity, Column, ObjectIdColumn } from 'typeorm';


@Entity()
export class Item {
  @ObjectIdColumn()
  id: string;

  @Column()
  productId: string;

  @Column()
  quantity: number;

  @Column()
  amount: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: null, nullable: true })
  updatedAt: Date;

}