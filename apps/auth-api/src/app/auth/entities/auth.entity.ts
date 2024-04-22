import { Column, CreateDateColumn, UpdateDateColumn, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('auth')
export class Auth{
  @ObjectIdColumn()
  public _id: string;

  @Column({ type: 'varchar', length: 255, unique: false })
  public userId: string;

  @Column({ type: 'varchar' })
  public token: string;

  @Column()
  email: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updated_at: Date;
}
