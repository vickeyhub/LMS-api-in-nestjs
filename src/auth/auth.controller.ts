import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth') // /auth/register
export class AuthController {
    // authService: AuthService;

    constructor(private readonly authService: AuthService){}
    @Post('register')
    async register(@Body() registerUserDto:RegisterDto){
        const result = await this.authService.registerUser(registerUserDto);
        return result;
        
    }
    @Get('users')
    async getAllUsers() {
        return await this.authService.getAllUsers();
    }
}
