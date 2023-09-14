import { StoreSchema } from '@/app/providers/store';

export const getArticlesListOrder = (state: StoreSchema) => state.articlesList?.order || 'asc';
