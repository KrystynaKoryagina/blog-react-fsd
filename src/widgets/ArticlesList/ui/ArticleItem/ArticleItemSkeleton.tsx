import { memo } from 'react';
import { ArticleView } from 'features/ArticleViewSwitcher';
import { classNames } from 'shared/lib/utils/classNames';
import styles from './ArticleItem.module.scss';
import { ArticleListViewSkeleton } from '../ArticleListView/ArticleListViewSkeleton';
import { ArticleGridViewSkeleton } from '../ArticleGridView/ArticleGridViewSkeleton';

interface ArticleItemSkeletonProps {
  view: ArticleView
}

export const ArticleItemSkeleton = memo(({ view }: ArticleItemSkeletonProps) => (
  <div className={classNames(styles.ArticleItem, [styles[view]])}>
    {view === 'list' ? <ArticleListViewSkeleton /> : <ArticleGridViewSkeleton />}
  </div>
));
