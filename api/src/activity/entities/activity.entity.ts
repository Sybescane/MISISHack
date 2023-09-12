import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Activity{
    @PrimaryGeneratedColumn()
    activityId: number

    @Column()
    description: string

    @Column({name: 'date_start'})
    dateStart: Date

    @Column({name: 'date_end'})
    dateEnd: Date

    @ManyToMany(() => User, (user) => user.activities)
    users: User[]
}