import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Discipline } from "./discipline.entity";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Achievment{
    @PrimaryGeneratedColumn()
    achievmentId: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    points: number

    @Column()
    isCustom: boolean

    @ManyToOne(() => Discipline, (disc) => disc.achievments)
    discipline: Discipline

    @ManyToMany(() => User, (user) => user.achievments)
    users: User[]
}