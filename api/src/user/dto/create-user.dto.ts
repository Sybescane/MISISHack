import { ApiProperty, PickType } from "@nestjs/swagger";
import { User } from "../entities/user.entity";

export class CreateUserDto extends PickType(User, ['email', 'fullname', 'nickname', 'password', 'about', 'tgContact'] as const) {
    @ApiProperty({description: 'идентификаторы специализаций'}) 
    specialization: number[]
}
