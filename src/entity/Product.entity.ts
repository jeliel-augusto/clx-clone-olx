import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { User } from "./User.entity";
import {Category} from "./Category.entity";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        type: 'varchar'
    })
    description: string;
    @Column({
        type: 'decimal',
    })
    price: number;
    @Column({
        nullable: false,
    })
    userId: number;

    @ManyToOne(() => User, user => user.products)
    user: User;

    @ManyToOne(() => Category, category => category.products)
    categories: Category[];
}