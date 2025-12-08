import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth') // /auth/register
export class AuthController {
    // authService: AuthService;

    constructor(private readonly authService: AuthService){}
    @Post('register')
    async register(@Body() registerUserDto:RegisterDto){
        const token = await this.authService.registerUser(registerUserDto);
        return token;
        
    }
    @Get('users')
    async getAllUsers() {
        return await this.authService.getAllUsers();
    }
}
