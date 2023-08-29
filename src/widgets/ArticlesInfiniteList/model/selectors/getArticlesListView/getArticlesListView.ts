import { StoreSchema } from 'app/providers/store';

export const getArticlesListView = (state: StoreSchema) => state.articlesList?.view || 'grid';
