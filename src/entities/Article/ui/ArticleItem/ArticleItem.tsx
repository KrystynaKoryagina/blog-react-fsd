import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import { Article, ArticleView } from '../../model/types/article';
import styles from './ArticleItem.module.scss';
import { ArticleListView } from '../ArticleListView/ArticleListView';
import { ArticleGridView } from '../ArticleGridView/ArticleGridView';

interface ArticleItemProps {
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleItem = memo(({ article, view, target }: ArticleItemProps) => (
  <div className={classNames('', [styles[view]])}>
    {view === 'list' ? <ArticleListView article={article} /> : <ArticleGridView article={article} target={target} />}
  </div>
));
