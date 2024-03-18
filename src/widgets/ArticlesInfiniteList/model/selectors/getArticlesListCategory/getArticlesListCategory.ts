import { StoreSchema } from '@/app/providers/store';
import { ArticleCategory } from '@/entities/Article';

export const getArticlesListCategory = (state: StoreSchema) =>
  state.articlesList?.category || ArticleCategory.ALL;
