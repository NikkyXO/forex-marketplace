import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class ForexRate {
  @ObjectIdColumn()
  id: string;

  @Column()
  baseCurrency: string;

  @Column()
  targetCurrency: string;

  @Column()
  rate: number;

}
