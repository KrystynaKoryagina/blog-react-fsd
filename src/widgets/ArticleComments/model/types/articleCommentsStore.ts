import { EntityState } from '@reduxjs/toolkit';
import { CommentData } from 'entities/Comment';

export interface ArticleCommentsStore extends EntityState<CommentData> {
  isLoading: boolean;
  error?: string | null;
}
