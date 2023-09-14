import { StoreSchema } from '@/app/providers/store';

export const getArticlesListHasMore = (state: StoreSchema) => state.articlesList?.hasMore;
