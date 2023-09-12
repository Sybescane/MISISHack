import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
// import { VerificationService } from './verification.service';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { verify } from 'argon2';
import { SignInAdminDto } from './dto/sign-admin.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { SignInUserDto } from './dto/sign-user.dto';
// import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly mailService: MailService,
        // private readonly verificationService: VerificationService,
        // private readonly adminService: AdminService,
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ){}

    async register(dto :CreateUserDto){
        const user = await this.userService.create(dto)
        const payload = { sub: user.userId, type: 'user'};
        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }

    // async sendVerificationCode(email: string): Promise<void>{
    //     const user = await this.userService.findOneByEmail(email);
    //     if(user){
    //         throw new BadRequestException('У вас уже есть аккаунт')
    //     }
        
    //     const code = await this.verificationService.generateCode();
    //     await this.verificationService.storeCode(email, code)
    //     await this.mailService.sendCodeMail(email, code);
    // }

    async signInUser(dto: SignInUserDto): Promise<any> {
        const user = await this.userService.findOneByEmail(dto.email);
        if(user === null){
            throw new UnauthorizedException();
        }
        if (!await verify(user.password, dto.password)) {
          throw new UnauthorizedException();
        }
        const payload = { sub: user.userId, type: 'user'};
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
      }
    
    // async signInAdmin(dto: SignInAdminDto){
    //     const admin = await this.adminService.findOneByLogin(dto.login);
    //     if (! await verify(admin.password, dto.password)) {
    //       throw new UnauthorizedException();
    //     }
    //     const payload = { sub: admin.login, roles: admin.adminType, type: 'admin'};
    //     return {
    //         access_token: await this.jwtService.signAsync(payload),
    //     };
    // }
    }