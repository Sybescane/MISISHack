import { ApiProperty, PickType } from "@nestjs/swagger";
import { Team } from "../entities/team.entity";

export class CreateTeamDto extends PickType(Team, ['description', 'isOpened', 'name'] as const){
    @ApiProperty({description: 'идентификатор создателя команды', type: 'number'})
    captainId: number

    @ApiProperty({description: 'массив id специализаций'})
    specializations: number[]
}