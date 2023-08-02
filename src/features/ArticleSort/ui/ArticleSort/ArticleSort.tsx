import { memo, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select';
import { SortOrder } from 'shared/types/sort';
import { useTranslation } from 'react-i18next';
import styles from './ArticleSort.module.scss';
import { ArticleSortField } from '../../model/types/articleSort';

interface IArticleSort {
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newOrder: ArticleSortField) => void
}

export const ArticleSort = memo(({
  sort, order, onChangeOrder, onChangeSort,
}: IArticleSort) => {
  const { t } = useTranslation();

  // TODO add translations
  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: 'возрвстанию',
    },
    {
      value: 'desc',
      content: 'убыванию',
    },
  ], []);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: 'дате создания',
    },
    {
      value: ArticleSortField.TITLE,
      content: 'заголовку',
    },
    {
      value: ArticleSortField.VIEWS,
      content: 'просмотрам',
    },
  ], []);

  return (
    <div className={styles.ArticleSort}>
      <Select
        options={sortFieldOptions}
        label='Cортировать по:'
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label='По:'
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
