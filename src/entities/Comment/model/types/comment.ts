import { User } from 'entities/User';

export interface CommentData {
  id: string
  user: User
  text: string
}
