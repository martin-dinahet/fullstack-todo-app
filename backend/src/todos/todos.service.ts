import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(@Inject('TODO_REPOSITORY') private todosRepository: Repository<Todo>) {}

  findAllForUser = (userId: string): Promise<Array<Todo>> => {
    return this.todosRepository.find({ where: { author: { id: userId } } });
  };

  create = async (userId: string, createTodoDto: CreateTodoDto): Promise<Todo> => {
    const todo = this.todosRepository.create({ content: createTodoDto.content, author: { id: userId } });
    return this.todosRepository.save(todo);
  };

  findOne = async (userId: string, id: string): Promise<Todo | null> => {
    return this.todosRepository.findOne({ where: { id, author: { id: userId } } });
  };

  update = async (userId: string, id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> => {
    const todo = await this.todosRepository.findOne({ where: { id, author: { id: userId } } });
    if (!todo) throw new NotFoundException('Todo not found');
    Object.assign(todo, updateTodoDto);
    return this.todosRepository.save(todo);
  };

  remove = async (userId: string, id: string): Promise<void> => {
    const todo = await this.todosRepository.findOne({ where: { id, author: { id: userId } } });
    if (!todo) throw new NotFoundException('Todo not found');
    await this.todosRepository.remove(todo);
  };
}
