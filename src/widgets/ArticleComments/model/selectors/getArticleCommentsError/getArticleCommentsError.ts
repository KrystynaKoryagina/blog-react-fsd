import { StoreSchema } from 'app/providers/store';

export const getArticleCommentsError = (state: StoreSchema) => state.article?.error;
