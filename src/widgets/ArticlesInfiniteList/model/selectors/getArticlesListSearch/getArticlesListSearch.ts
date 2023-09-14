import { StoreSchema } from '@/app/providers/store';

export const getArticlesListSearch = (state: StoreSchema) => state.articlesList?.search;
