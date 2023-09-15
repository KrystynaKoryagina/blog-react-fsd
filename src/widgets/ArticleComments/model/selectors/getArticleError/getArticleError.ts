import { StoreSchema } from '@/app/providers/store';

export const getArticleError = (state: StoreSchema) => state.article?.error;
