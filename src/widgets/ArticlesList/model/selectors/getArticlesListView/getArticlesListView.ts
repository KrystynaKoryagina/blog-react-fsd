import { StoreSchema } from 'app/providers/store';
// import { initialState } from '../../slice/articlesListSlice';

export const getArticlesListView = (state: StoreSchema) => state.articlesList?.view || 'grid';
