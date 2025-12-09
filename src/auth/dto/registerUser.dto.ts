import { IsEmail, IsNotEmpty, IsString, MinLength, Matches } from 'class-validator';
export class RegisterDto {
    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    @Matches(/^\S*$/, {
        message: 'first name should not contain spaces',
    })
    fname: string;

    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    @Matches(/^\S*$/, {
        message: 'last name should not contain spaces',
    })
    lname: string;

    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @IsString()
    password: string;
}