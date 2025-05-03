import { Controller, Delete, Put } from '@nestjs/common';
import { HttpCode } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { UseGuards } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { ProfileRequest } from './auth.types';
import { SignUpDto } from './dto/sign-up-dto';
import { UsersService } from 'src/users/users.service';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto.username, signUpDto.email, signUpDto.password);
  }

  @UseGuards(AuthGuard)
  @Put('profile')
  updateProfile(@Request() req: ProfileRequest, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(req.user.id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete('profile')
  deleteProfile(@Request() req: ProfileRequest) {
    return this.usersService.delete(req.user.id);
  }
}
