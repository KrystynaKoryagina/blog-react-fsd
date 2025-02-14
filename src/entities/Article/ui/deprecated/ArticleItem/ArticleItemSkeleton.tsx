import { memo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './ArticleItem.module.scss';
import { ArticleListViewSkeleton } from '../ArticleListView/ArticleListViewSkeleton';
import { ArticleGridViewSkeleton } from '../ArticleGridView/ArticleGridViewSkeleton';
import { ArticleView } from '../../../model/types/article';

interface ArticleItemSkeletonProps {
  view: ArticleView;
}

/**
 * @deprecated
 */
export const ArticleItemSkeleton = memo(
  ({ view }: ArticleItemSkeletonProps) => (
    <div className={classNames(styles.ArticleItem, [styles[view]])}>
      {view === 'list' ? (
        <ArticleListViewSkeleton />
      ) : (
        <ArticleGridViewSkeleton />
      )}
    </div>
  ),
);
