import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class SignInUserDto{
    @IsEmail()
    @ApiProperty({example: 'm2110501@edu.misis.ru', description: 'почта пользователя'})
    email:string;

    @ApiProperty({example: '123456', description: 'пароль пользователя'})
    password: string;
}