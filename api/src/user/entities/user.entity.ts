import { ApiProperty } from "@nestjs/swagger";
import { MinLength } from "class-validator";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Specialization } from "../../specialization/entities/specialization.entity";
import { Team } from "../../team/entities/team.entity";
import { Post } from "../../post/entities/post.entity";
import { Activity } from "../../activity/entities/activity.entity";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    userId: number

    @ApiProperty({type: 'string', example: 'Иванов Иван Иванович', description: 'ФИО студента'})
    @Column()
    fullname: string;

    @Column()
    nickname: string

    @Column({unique: true})
    email: string

    @MinLength(8)
    @ApiProperty({type: 'string', description: 'пароль пользователя'})
    @Column()
    password: string

    @Column()
    about: string

    @Column()
    tgContact: string

    @Column({default: false})
    isFamous: boolean

    @OneToMany(() => Team, (team) => team.captain)
    captainTeams: Team[]

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]

    @ManyToMany(() => Team, (team) => team.users)
    @JoinTable({
        name: 'user_team',
        joinColumn: {name: 'userId'},
        inverseJoinColumn: {name: 'teamId'}
    })
    teams: Team[]

    @ManyToMany(() => Activity, (active) => active.users)
    @JoinTable({
        name: 'user_activity',
        joinColumn: {name: 'userId'},
        inverseJoinColumn: {name: 'activityId'}
    })
    activities: Activity[]  

    @ManyToMany(() => Specialization, (spec) => spec.users, {
        cascade: true
    })
    @JoinTable({
        name: 'user_specialization',
        joinColumn: {name: 'userId'},
        inverseJoinColumn: {name: 'specializationId'}
    })
    specializations: Specialization[]

    @ManyToMany(() => Specialization, (spec) => spec.users, {
        cascade: true
    })
    @JoinTable({
        name: 'user_achievment',
        joinColumn: {name: 'userId'},
        inverseJoinColumn: {name: 'achievmentId'}
    })
    achievments: Specialization[]

    // @ApiProperty({example: '123456', description: 'Код подтверждения с почты'})
    // @Column({
    //     name: 'code_confirm',
    //     nullable: true
    // })
    // codeConfirm: string;
}
