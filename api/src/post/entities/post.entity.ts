import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Catalog } from "./catalog.entity";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    postId: number

    @Column()
    title: string

    @Column()
    message: string

    @CreateDateColumn()
    createdDate: Date

    @ManyToOne(() => User, (user) => user.posts)
    user: User

    @ManyToOne(() => Catalog, (catalog) => catalog.posts)
    catalog: Catalog
}