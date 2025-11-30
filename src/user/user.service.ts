import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(registerUserDto:RegisterDto){
        // const createdUser = new this.userModel(registerUserDto);
        return await this.userModel.create({
            fname: registerUserDto.fname,
            lname: registerUserDto.lname,
            email: registerUserDto.email,
            password: registerUserDto.password,
        });
        
        
    }

    async findAllusers(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}
