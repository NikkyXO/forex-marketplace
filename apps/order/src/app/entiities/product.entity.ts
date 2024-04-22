import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';


@Entity()
export class Product {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  price: number

  @Column()
  image: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: null, nullable: true })
  updatedAt: Date;

}
