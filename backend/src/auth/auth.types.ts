import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';

export interface ProfileRequest extends Request {
  user: User;
}
