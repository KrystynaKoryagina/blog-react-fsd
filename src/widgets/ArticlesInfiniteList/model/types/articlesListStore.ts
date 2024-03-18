import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleCategory, ArticleView } from '@/entities/Article';
import { ArticleSortField } from '@/features/ArticleSort/model/types/articleSort';
import { SortOrder } from '@/shared/types/sort';

export interface ArticlesListStore extends EntityState<Article> {
  isLoading: boolean;
  error?: string | null;

  // filters
  // TODO делегировть фичам
  order: SortOrder;
  view: ArticleView;
  sort: ArticleSortField;
  category: ArticleCategory;
  search?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  _inited: boolean;
}
