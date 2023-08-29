import { StoreSchema } from 'app/providers/store';
import { ArticleSortField } from 'features/ArticleSort';

export const getArticlesListSort = (state: StoreSchema) => state.articlesList?.sort || ArticleSortField.CREATED;
