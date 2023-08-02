import { Article } from 'entities/Article';
import { memo } from 'react';
import { ArticleView } from 'features/ArticleViewSwitcher';
import { classNames } from 'shared/lib/utils/classNames';
import styles from './ArticleItem.module.scss';
import { ArticleListView } from '../ArticleListView/ArticleListView';
import { ArticleGridView } from '../ArticleGridView/ArticleGridView';

interface ArticleItemProps {
  article: Article
  view: ArticleView
}

export const ArticleItem = memo(({ article, view }: ArticleItemProps) => (
  <div className={classNames(styles.ArticleItem, [styles[view]])}>
    {view === 'list' ? <ArticleListView article={article} /> : <ArticleGridView article={article} />}
  </div>
));
