import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';


@Entity()
export class UserProduct {
  @ObjectIdColumn()
  id: string;

  @Column()
  productId: string;

  @Column()
  userId: string;

  @Column()
  description: string;

  @Column()
  product_visibility: boolean;

  @Column()
  sellingPrice: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: null, nullable: true })
  updatedAt: Date;

}
