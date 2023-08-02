import { StoreSchema } from 'app/providers/store';

export const getArticleLoading = (state: StoreSchema) => !!state.article?.isLoading;
