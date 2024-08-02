import { ArticleViewSwitcher } from '@/features/ArticleViewSwitcher';
import { memo } from 'react';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

export const ArticlesViewContainer = memo(() => {
  const { view, onChangeView } = useArticlesFilters();

  return <ArticleViewSwitcher view={view} changeView={onChangeView} />;
});
