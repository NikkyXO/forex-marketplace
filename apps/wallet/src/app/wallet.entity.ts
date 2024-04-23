import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';


@Entity()
export class UserWallet {
  @ObjectIdColumn()
  id: string;

  @Column()
  userId: string;

  @Column({type: 'int',  default: 0 })
  balance: number;

  @Column({type: 'int',  default: 0 })
  totalCredit: number;

  @Column({type: 'int',  default: 0 })
  actualSpend: number;

  @Column({type: 'int'})
  accountNumber: number;


  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({  default: null, nullable: true })
  updatedAt: Date;

}
