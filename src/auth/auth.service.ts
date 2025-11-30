import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService) {}
    async registerUser(registerUserDto: RegisterDto){
        const saltROunds  = 10;
        const hash = await bcrypt.hash(registerUserDto.password, saltROunds);
        // logic for user registration
        /*
        1. check if email already exists
        2. v hash the password
        3. v save user to database
        4. generate JWT token
        5. send token in response
        */

       const user = await this.userService.createUser({
            ...registerUserDto, 
            password: hash
        });
        // console.log('user', user);
         return { message: 'User registered successfully', user };
    }

    async getAllUsers() {
        return this.userService.findAllusers();
    }
}
