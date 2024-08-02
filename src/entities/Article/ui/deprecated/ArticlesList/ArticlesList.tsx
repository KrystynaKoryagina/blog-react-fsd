import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article, ArticleView } from '@/entities/Article/model/types/article'; // TODO fix path
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleItemSkeleton } from '../ArticleItem/ArticleItemSkeleton';
import { ArticleItem } from '../ArticleItem/ArticleItem';

const getSkeletonsData = (view: ArticleView) =>
  new Array(view === 'list' ? 4 : 15)
    // eslint-disable-next-line react/no-array-index-key
    .fill(null)
    .map((_, index) => <ArticleItemSkeleton key={index} view={view} />);

interface ArticlesListProps {
  articles: Article[];
  view?: ArticleView;
  isLoading: boolean;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

/**
 * @deprecated
 */
export const ArticlesList = memo(
  ({
    articles,
    view = 'grid',
    target,
    isLoading,
    className,
  }: ArticlesListProps) => {
    const renderArticles = (article: Article) => (
      <ArticleItem
        article={article}
        key={article?.id}
        view={view}
        target={target}
        isLoading={isLoading}
      />
    );

    if (view === 'list') {
      return (
        <VStack className={className} gap="16">
          {articles?.map(renderArticles)}
          {isLoading && getSkeletonsData(view)}
        </VStack>
      );
    }

    return (
      <HStack className={className} wrap="wrap" gap="16">
        {articles?.map(renderArticles)}
        {isLoading && getSkeletonsData(view)}
      </HStack>
    );
  },
);
