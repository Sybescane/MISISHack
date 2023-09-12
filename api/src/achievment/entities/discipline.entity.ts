import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DisciplineFormat } from "./disc-format.enum";
import { Achievment } from "./achievment.entity";

@Entity()
export class Discipline{
    @PrimaryGeneratedColumn()
    disciplineId: number

    @Column()
    name: string

    @Column({type: 'int', unsigned: true, width: 1})
    semestr: number

    @Column({
        type: 'enum',
        enum: DisciplineFormat
    })
    format: DisciplineFormat

    @OneToMany(() => Achievment, (achievment) => achievment.discipline)
    achievments: Achievment[]
}