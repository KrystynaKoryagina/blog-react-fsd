import { memo, useMemo } from 'react';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types/sort';
import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/ui/Stack';
import { ArticleSortField } from '../../model/types/articleSort';

// TODO изолировать в рамках фичи - сделать общий компонент сортировки подходящий для любых страниц
// создать свою model selecter

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
    <HStack gap='16'>
      <Select
        options={sortFieldOptions}
        label='Cортировать по' // TODO translation
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label='По' // TODO translation
        value={order}
        onChange={onChangeOrder}
      />
    </HStack>
  );
});
