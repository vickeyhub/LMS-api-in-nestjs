import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(registerUserDto:RegisterDto){
        // const createdUser = new this.userModel(registerUserDto);
        try {

            return await this.userModel.create({
                fname: registerUserDto.fname,
                lname: registerUserDto.lname,
                email: registerUserDto.email,
                password: registerUserDto.password,
            });
        } catch (error) {
            const DUPLICATE_KEY_CODE = 11000;
            if(error.code === DUPLICATE_KEY_CODE){
                throw new ConflictException(error.keyValue.email + ' is already exists');
            }
            throw error;
        }
        
        
    }

    async findAllusers(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}
