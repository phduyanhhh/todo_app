import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema({timestamps: true})
export class Todo {
  @Prop()
  do: string;

  @Prop()
  description: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
