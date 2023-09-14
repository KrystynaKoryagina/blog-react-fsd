import { memo } from 'react';
import { ArticlesList } from '@/entities/Article';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slice/articlesListSlice';
import { getArticlesListLoading } from '../../model/selectors/getArticlesListLoading/getArticlesListLoading';
import { getArticlesListView } from '../../model/selectors/getArticlesListView/getArticlesListView';

interface ArticlesInfiniteListProps {
  className?: string
}

export const ArticlesInfiniteList = memo(({
  className,
}: ArticlesInfiniteListProps) => {
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesListLoading);
  const view = useSelector(getArticlesListView);

  return (
    <ArticlesList
      className={className}
      articles={articles}
      isLoading={isLoading}
      view={view}
    />
  );
});
