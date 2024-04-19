import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/sort';
import { HStack } from '@/shared/ui/Stack';
import { ArticleSortField } from '../../model/types/articleSort';

// TODO почему опции в этом компоненте, а методы в другом????
// может все сделать здесь
interface IArticleSort {
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSort = memo(
  ({ sort, order, onChangeOrder, onChangeSort }: IArticleSort) => {
    const { t } = useTranslation('article');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
      () => [
        {
          value: 'asc',
          content: t('SORT.ASCENDENT'),
        },
        {
          value: 'desc',
          content: t('SORT.DESCENDENT'),
        },
      ],
      [],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
      () => [
        {
          value: ArticleSortField.CREATED,
          content: t('SORT.CREATED_DATE'),
        },
        {
          value: ArticleSortField.TITLE,
          content: t('SORT.TITLE'),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t('SORT.VIEWS'),
        },
      ],
      [],
    );

    return (
      <HStack gap="16">
        <Select<ArticleSortField>
          options={sortFieldOptions}
          value={sort}
          onChange={onChangeSort}
        />
        <Select<SortOrder>
          options={orderOptions}
          value={order}
          onChange={onChangeOrder}
        />
      </HStack>
    );
  },
);
