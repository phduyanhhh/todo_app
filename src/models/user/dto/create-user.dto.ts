import { IsNotEmpty, IsEmail, IsUnique } from 'class-validator';
import { IsUnique } from ''
export class CreateUserDto {
    @IsNotEmpty()
    first_name: string;
  
    @IsNotEmpty()
    last_name: string;
    
    @IsEmail()
    @IsNotEmpty()
    @IsUnique()
    email: string;
        
    @IsNotEmpty()
    phone_number: string;

    @IsNotEmpty()
    hashPassword: string;

    slug: string;
}
