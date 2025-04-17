import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column({ default: false })
  topPick: boolean;
}
