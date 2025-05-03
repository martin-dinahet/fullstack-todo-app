import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { AuthGuard } from '../auth/auth.guard';
import { ProfileRequest } from '../auth/auth.types';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Request() req: ProfileRequest): Promise<Array<Todo>> {
    const user = req.user;
    return this.todosService.findAllForUser(user.id);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Request() req: ProfileRequest, @Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    const user = req.user;
    return this.todosService.create(user.id, createTodoDto);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Request() req: ProfileRequest, @Param('id') id: string): Promise<Todo | null> {
    const user = req.user;
    return this.todosService.findOne(user.id, id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Request() req: ProfileRequest, @Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const user = req.user;
    return this.todosService.update(user.id, id, updateTodoDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Request() req: ProfileRequest, @Param('id') id: string): Promise<void> {
    const user = req.user;
    return this.todosService.remove(user.id, id);
  }
}
