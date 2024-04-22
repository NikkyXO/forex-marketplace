import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';


@Entity()
export class User {
  @ObjectIdColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: null, nullable: true })
  updatedAt: Date;

}
