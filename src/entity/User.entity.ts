import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./Product.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        type: 'varchar',
        length: 100
    })
    name: string;
    @Column({
        type: 'varchar',
        length: 50
    })
    email: string;
    @Column({
        type: 'varchar',
    })
    password: string;
    @Column({
        type: 'varchar',
    })
    phone: string;

    @OneToMany(() => Product, product => product.user)
    products: Product[]
}