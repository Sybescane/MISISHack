import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Hackathon } from "src/hackathon/entities/hackathon.entity";
import { Specialization } from "../../specialization/entities/specialization.entity";

@Entity()
export class Team{
    @PrimaryGeneratedColumn()
    teamId: number

    @Column()
    name: string

    @Column()
    description: string

    @Column({default: false})
    isOpened: boolean

    @ManyToOne(() => User, (user) => user.captainTeams)
    captain: User

    @ManyToMany(()=> User, (user) => user.teams)
    users: User[]

    @ManyToMany(() => Hackathon, (hack) => hack.teams)
    @JoinTable({
        name: 'team_hackathon',
        joinColumn: {name: 'teamId'},
        inverseJoinColumn: {name: 'hackathonId'}
    })
    hackathons: Hackathon[]

    @ManyToMany(() => Specialization, (spec) => spec.teams)
    @JoinTable({
        name: 'team_specialization',
        joinColumn: {name: 'teamId'},
        inverseJoinColumn: {name: 'specializationId'}
    })
    specializations: Specialization[]
}