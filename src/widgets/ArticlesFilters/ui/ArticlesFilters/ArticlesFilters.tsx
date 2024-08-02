import { memo } from 'react';
import styles from './ArticlesFilters.module.scss';
import { ArticleSort, ArticleSortField } from '@/features/ArticleSort';
import { SortOrder } from '@/shared/types/sort';
import { ArticleCategory } from '@/entities/Article';
import { UICard } from '@/shared/ui/UICard';
import { classNames } from '@/shared/lib/utils/classNames';
import { Search } from '@/features/Search';
import { ArticleCategoryFilter } from '@/features/ArticleCategoryFilter';
import { ChipContent } from '@/shared/ui/deprecated/Chip';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  category: ArticleCategory;
  search?: string;
  onSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeCategory: (value: ChipContent<ArticleCategory>) => void;
}

export const ArticlesFilters = memo(
  ({
    className,
    search,
    sort,
    order,
    category,
    onChangeCategory,
    onChangeSort,
    onChangeOrder,
    onSearch,
  }: ArticlesFiltersProps) => {
    return (
      <UICard
        className={classNames(styles.ArticlesFilters, [className])}
        gap="32"
      >
        <Search searchValue={search} onSearch={onSearch} />

        <ArticleCategoryFilter
          category={category}
          onChangeCategory={onChangeCategory}
        />

        <ArticleSort
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </UICard>
    );
  },
);
