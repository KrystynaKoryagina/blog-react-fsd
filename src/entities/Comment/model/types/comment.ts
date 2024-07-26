import { User } from '@/entities/User';

export interface CommentData {
  id: string;
  user: User;
  text: string;
}

export interface SendCommentRequest {
  articleId: string;
  userId: string;
  text: string;
}
