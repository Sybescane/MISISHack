import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity()
export class Catalog{
    @PrimaryGeneratedColumn()
    catalogId: number

    @Column()
    name: string

    @Column()
    description: string

    @OneToMany(() => Post, (post) => post.catalog)
    posts: Post[]
}