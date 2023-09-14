import { StoreSchema } from '@/app/providers/store';

export const getArticlesListError = (state: StoreSchema) => state.articlesList?.error;
