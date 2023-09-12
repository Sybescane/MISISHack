import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { HackStatus } from "./hack-status.enum";
import { Team } from "src/team/entities/team.entity";
import { HackathonFormat } from "./hack-format.enum";

@Entity()
export class Hackathon {
    @PrimaryGeneratedColumn()
    hackathonId: number

    @Column()
    name: string

    @Column({
        type: 'enum',
        enum: HackathonFormat,
        default: HackathonFormat.online
    })
    format: HackathonFormat

    @Column({name: 'link_on_register'})
    linkOnRegister: string

    @Column({name: 'register_end'})
    registerEnd: Date

    @Column({name: 'date_start'})
    dateStart: Date

    @Column({name: 'date_end'})
    dateEnd: Date

    @ManyToMany(() => Team, (team) => team.hackathons)
    teams: Team[]
}
