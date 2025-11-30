import { Controller, Post } from '@nestjs/common';

@Controller('auth') // /auth/register
export class AuthController {
    @Post('register')
    register() {
        return { message: 'User registered successfully' };
    }
}
