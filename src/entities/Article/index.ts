export { ArticleDetails as ArticleDetailsDeprecated } from './ui/deprecated/ArticleDetails/ArticleDetails';
export { ArticlesList as ArticlesListDeprecated } from './ui/deprecated/ArticlesList/ArticlesList';

export type {
  Article,
  ArticleView,
  ArticleCategory,
  ArticleBlockType,
} from './model/types/article';

export type { ArticleStore } from './model/types/articleStore';

export { getArticleData } from './model/selectors/getArticleData/getArticleData';

export {
  ArticleCategoryValues,
  ArticleBlockTypeValues,
} from './model/consts/article';

export { ArticleItem } from './ui/ArticleItem/ArticleItem';
