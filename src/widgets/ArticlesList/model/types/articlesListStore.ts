import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleCategory } from 'entities/Article';
import { ArticleSortField } from 'features/ArticleSort/model/types/articleSort';
import { ArticleView } from 'features/ArticleViewSwitcher';
import { SortOrder } from 'shared/types/sort';

export interface ArticlesListStore extends EntityState<Article> {
  isLoading: boolean;
  error?: string | null;
  // filters
  order: SortOrder
  view: ArticleView
  sort: ArticleSortField
  category: ArticleCategory
  search?: string
  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  _inited: boolean;
}
