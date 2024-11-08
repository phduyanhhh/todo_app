import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from "./dto/update-user.dto";
import { hashPasswordHelper } from "../../util/hash.helps";
import { slugifyModel } from "../../util/slug.helps";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }
  
  async create(createUserDto: CreateUserDto) {
    const { first_name, last_name, email, phone_number, hashPassword } = createUserDto;
    const password = await hashPasswordHelper(hashPassword);
    const slugHelper = await slugifyModel(first_name, last_name);
    const user = await this.userModel.create({
      first_name,
      last_name,
      email,
      phone_number,
      hashPassword: password,
      slug: slugHelper
    })
    return user;

  }
  findOne(slug: string) {
    return this.userModel.find({slug: slug});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
