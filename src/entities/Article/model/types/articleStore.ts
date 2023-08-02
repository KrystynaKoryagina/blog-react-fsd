import { Article } from './article';

export interface ArticleStore {
  data: Article | null;
  isLoading: boolean;
  error?: string | null;
}
