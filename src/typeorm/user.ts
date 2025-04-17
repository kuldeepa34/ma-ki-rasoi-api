import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id_pk',
        
    })
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        nullable: false,
        unique: true
    })
    userName: string;

    @Column({
        nullable: false
    })
    mobileNo: number;

    @Column({
        nullable: false,
        unique: true
    })
    email: string;

    @Column({
        nullable: false
    })
    password: string
}