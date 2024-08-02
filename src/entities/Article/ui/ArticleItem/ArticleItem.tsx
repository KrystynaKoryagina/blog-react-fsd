import { memo } from 'react';
// import { classNames } from '@/shared/lib/utils/classNames';
// import styles from './ArticleItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleGridView } from '../ArticleGridView/ArticleGridView';
import { ArticleListView } from '../ArticleListView/ArticleListView';

// TODO classname
interface ArticleItemProps {
  article: Article;
  view: ArticleView;
  // target?: HTMLAttributeAnchorTarget;
  isLoading: boolean;
  // className?: string;
}

export const ArticleItem = memo(
  ({ article, view, isLoading }: ArticleItemProps) =>
    view === 'list' ? (
      <ArticleListView article={article} isLoading={isLoading} />
    ) : (
      <ArticleGridView article={article} isLoading={isLoading} />
    ),
);
