import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Team } from "../../team/entities/team.entity";

@Entity()
export class Specialization{
    @PrimaryGeneratedColumn()
    specializationId: number

    @Column({name: 'spec_name'})
    specName: string

    @ManyToMany(() => User, (user) => user.specializations)
    users: User[]

    @ManyToMany(() => Team, (team) => team.specializations)
    teams: Team[]
}