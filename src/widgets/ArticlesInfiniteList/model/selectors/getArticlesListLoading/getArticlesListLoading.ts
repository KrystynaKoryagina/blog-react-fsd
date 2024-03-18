import { StoreSchema } from '@/app/providers/store';

export const getArticlesListLoading = (state: StoreSchema) =>
  !!state.articlesList?.isLoading;
