export { ArticleDetails as ArticleDetailsDeprecated } from './ui/deprecated/ArticleDetails/ArticleDetails';
export { ArticlesList } from './ui/deprecated/ArticlesList/ArticlesList';

export type {
  Article,
  ArticleView,
  ArticleCategory,
  ArticleBlockType,
} from './model/types/article';

export type { ArticleStore } from './model/types/articleStore';

export { getArticleData } from './model/selectors/getArticleData/getArticleData';
export { getArticleLoading } from './model/selectors/getArticleLoading/getArticleLoading';
export { getArticleError } from './model/selectors/getArticleError/getArticleError';
export { getArticleCanEdit } from './model/selectors/getArticleCanEdit/getArticleCanEdit';

export {
  ArticleCategoryValues,
  ArticleBlockTypeValues,
} from './model/consts/article';

export { ArticleItem } from './ui/ArticleItem/ArticleItem';
export { ArticleCategoryList } from './ui/ArticleCategoryList/ArticleCategoryList';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export {
  useGetArticleByIdQuery,
  useGetRecommendedArticlesQuery,
} from './api/articleApi';
