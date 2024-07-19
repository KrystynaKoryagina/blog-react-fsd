import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  Article,
  ArticleItem,
  ArticlesListDeprecated,
  ArticleView,
} from '@/entities/Article';
import { getArticles } from '../../model/slice/articlesListSlice';
import { getArticlesListLoading } from '../../model/selectors/getArticlesListLoading/getArticlesListLoading';
import { getArticlesListView } from '../../model/selectors/getArticlesListView/getArticlesListView';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { HStack, VStack } from '@/shared/ui/Stack';

const getSkeletonsData = (view: ArticleView) =>
  new Array(view === 'list' ? 4 : 15).fill(null, 1);

interface ArticlesListProps {
  className?: string;
}

export const ArticlesList = memo(({ className }: ArticlesListProps) => {
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesListLoading);
  const view = useSelector(getArticlesListView);

  // const articlesData: Article[] = useMemo(
  //   () => (isLoading ? getSkeletonsData(view) : articles),
  //   [isLoading],
  // );

  // const articlesData = useMemo(() => {
  //   return isLoading ? getSkeletonsData(view) : articles;
  // }, [isLoading, view]);

  const renderArticles = (article: Article) => (
    <ArticleItem
      article={article}
      key={article?.id}
      view={view}
      isLoading={isLoading}
    />
  );

  // TODO refactoring
  const contentJSX = useMemo(() => {
    if (view === 'list') {
      return (
        <VStack className={className} gap="16">
          {articles?.map(renderArticles)}
          {/* TODO fix key issue */}
          {isLoading && getSkeletonsData(view)?.map(renderArticles)}
        </VStack>
      );
    }

    return (
      <HStack className={className} wrap="wrap" gap="16">
        {articles?.map(renderArticles)}
        {/* TODO fix key issue */}
        {isLoading && getSkeletonsData(view)?.map(renderArticles)}
      </HStack>
    );
  }, [view, isLoading]);

  return (
    <ToggleFeatureComponent
      featureName="isRedesignEnable"
      off={
        <ArticlesListDeprecated
          className={className}
          articles={articles}
          isLoading={isLoading}
          view={view}
        />
      }
      on={contentJSX}
    />
  );
});
