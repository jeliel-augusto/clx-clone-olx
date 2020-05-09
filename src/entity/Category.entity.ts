import {Entity, ManyToOne, OneToMany} from "typeorm";
import {SubType} from "./SubType.entity";
import {Product} from "./Product.entity";


@Entity()
export class Category{
    name: string;

    @OneToMany(() => Category, category => category.parentCategory)
    childCategories: Category[];

    @ManyToOne(() => Category, category => category.childCategories)
    parentCategory: Category;

    types: SubType[];

    @ManyToOne(() => Product, product => product.categories)
    products: Product[];
}
