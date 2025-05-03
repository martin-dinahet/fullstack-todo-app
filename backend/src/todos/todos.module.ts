import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { DatabaseModule } from '../database/database.module';
import { todoProviders } from './todos.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...todoProviders, TodosService],
  exports: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}
