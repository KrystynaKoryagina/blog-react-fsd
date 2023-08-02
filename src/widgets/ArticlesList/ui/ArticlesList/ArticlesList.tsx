import { memo } from 'react';
import { Article } from 'entities/Article';
import { classNames } from 'shared/lib/utils/classNames';
import { ArticleView } from 'features/ArticleViewSwitcher';
import { useSelector } from 'react-redux';
import styles from './ArticlesList.module.scss';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { ArticleItemSkeleton } from '../ArticleItem/ArticleItemSkeleton';
import { getArticles } from '../../model/slice/articlesListSlice';
import { getArticlesListLoading } from '../../model/selectors/getArticlesListLoading/getArticlesListLoading';
import { getArticlesListView } from '../../model/selectors/getArticlesListView/getArticlesListView';

const getSkeletonsData = (view: ArticleView) => new Array(view === 'list' ? 4 : 15)
  // eslint-disable-next-line react/no-array-index-key
  .fill(null).map((_, index) => (<ArticleItemSkeleton key={index} view={view} />));

interface ArticlesListProps {
  className?: string
}

export const ArticlesList = memo(({
  className,
}: ArticlesListProps) => {
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesListLoading);
  const view = useSelector(getArticlesListView);

  const renderArticles = (article: Article, index: number) => (
    <ArticleItem article={article} key={article?.id || index} view={view} />
  );

  return (
    <div className={classNames(styles.ArticleList, [styles[view], className])}>
      {articles?.map(renderArticles)}
      {isLoading && getSkeletonsData(view)}
    </div>
  );
});
