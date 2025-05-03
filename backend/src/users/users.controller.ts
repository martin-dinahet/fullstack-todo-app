import { Controller, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Get } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ProfileRequest } from '../auth/auth.types';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async findAll() {
    return await this.usersService.findAllPublic();
  }

  @UseGuards(AuthGuard)
  @Get('/profile')
  async getUserProfile(@Request() req: ProfileRequest) {
    return await this.usersService.findOneByEmail(req.user.email);
  }
}
