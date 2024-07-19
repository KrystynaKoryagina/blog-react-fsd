import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { memo } from 'react';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

export const ArticlesFiltersContainer = memo(() => {
  const {
    order,
    sort,
    category,
    search,
    onChangeOrder,
    onChangeSort,
    onSearch,
    onChangeCategory,
  } = useArticlesFilters();

  return (
    <ArticlesFilters
      search={search}
      order={order}
      sort={sort}
      category={category}
      onChangeOrder={onChangeOrder}
      onChangeSort={onChangeSort}
      onSearch={onSearch}
      onChangeCategory={onChangeCategory}
    />
  );
});
