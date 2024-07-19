import { StoreSchema } from '@/app/providers/store';

export const getArticlesListLimit = (state: StoreSchema) =>
  state.articlesList?.limit;
