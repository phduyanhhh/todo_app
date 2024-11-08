
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true})
export class User {
  @Prop({required: true})
  first_name: string;

  @Prop({required: true})
  last_name: string;

  @Prop({required: true, unique: true})
  email: string;

  @Prop({required: true, unique: true})
  phone_number: string;

  @Prop({required: true})
  hashPassword: string;

  @Prop()
  slug: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
