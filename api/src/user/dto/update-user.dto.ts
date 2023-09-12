import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { User } from '../entities/user.entity';

export class UpdateUserDto extends PickType(User, ['email', 'fullname', 'nickname', 'password', 'about', 'tgContact'] as const) {
    @ApiProperty({description: 'идентификаторы специализаций'}) 
    specialization: number[]
}
