import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth') // /auth/register
export class AuthController {
    // authService: AuthService;

    constructor(private readonly authService: AuthService){}
    @Post('register')
    register(@Body() registerUserDto:RegisterDto){
        const result = this.authService.registerUser(registerUserDto);
        return result;
        
    }
    @Get('users')
    getAllUsers() {
        return this.authService.getAllUsers();
    }
}
