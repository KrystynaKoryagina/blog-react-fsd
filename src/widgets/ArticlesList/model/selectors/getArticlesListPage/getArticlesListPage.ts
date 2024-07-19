import { StoreSchema } from '@/app/providers/store';

export const getArticlesListPage = (state: StoreSchema) =>
  state.articlesList?.page || 1;
