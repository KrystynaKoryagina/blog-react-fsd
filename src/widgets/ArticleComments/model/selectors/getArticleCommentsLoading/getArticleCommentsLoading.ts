import { StoreSchema } from '@/app/providers/store';

export const getArticleCommentsLoading = (state: StoreSchema) =>
  !!state.articleComments?.isLoading;
