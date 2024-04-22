import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';


@Entity()
export class UserWallet {
  @ObjectIdColumn()
  id: string;

  @Column()
  userId: string;

  @Column()
  balance: number;

  @Column()
  totalCredit: number;

  @Column()
  actualSpend: number;

  @Column()
  accountNumber: number;


  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: null, nullable: true })
  updatedAt: Date;

}
