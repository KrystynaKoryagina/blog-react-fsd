import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/sort';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleSortField } from '../../model/types/articleSort';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UISelect } from '@/shared/ui/UISelect';
import { UIText } from '@/shared/ui/UIText';

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
      [t],
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
      [t],
    );

    return (
      <ToggleFeatureComponent
        featureName="isRedesignEnable"
        off={
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
        }
        on={
          <VStack gap="8">
            <UIText size="sm">{t('SORT_BY')}</UIText>
            <UISelect<ArticleSortField>
              options={sortFieldOptions}
              value={sort}
              onChange={onChangeSort}
            />
            <UISelect<SortOrder>
              options={orderOptions}
              value={order}
              onChange={onChangeOrder}
            />
          </VStack>
        }
      />
    );
  },
);
