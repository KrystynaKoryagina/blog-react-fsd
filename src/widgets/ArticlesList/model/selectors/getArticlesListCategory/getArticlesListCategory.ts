import { StoreSchema } from '@/app/providers/store';

export const getArticlesListCategory = (state: StoreSchema) =>
  state.articlesList?.category || 'ALL';
