import { ArticleSort, ArticleSortField } from 'features/ArticleSort';
import { ArticleViewSwitcher } from 'features/ArticleViewSwitcher';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { SortOrder } from 'shared/types/sort';
import {
  articlesListActions,
  getArticlesListOrder,
  getArticlesListSort,
  getArticlesListView,
  getArticlesListSearch,
  fetchArticles,
  getArticlesListCategory,
} from 'widgets/ArticlesInfiniteList';
import { Search } from 'features/Search';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { ChipContent } from 'shared/ui/Chip/types/chip';
import { ArticleCategory, ArticleView } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { Chip } from 'shared/ui/Chip';
import { HStack, VStack } from 'shared/ui/Stack';
import styles from './ArticlesPageFilter.module.scss';

export const ArticlesPageFilter = memo(() => {
  const { t } = useTranslation('article');

  const view = useSelector(getArticlesListView);
  const order = useSelector(getArticlesListOrder);
  const sort = useSelector(getArticlesListSort);
  const category = useSelector(getArticlesListCategory);
  const search = useSelector(getArticlesListSearch);

  const dispatch = useAppDispatch();

  // TODO
  // const fetchData = useCallback((action: AnyAction) => {
  //   dispatch(filterArticles(action));
  // }, [dispatch]);

  const ArticleCategoties = useMemo<ChipContent[]>(() => Object.entries(ArticleCategory)
    .map(([key, value]) => ({
      id: key,
      displayName: t(`ARTICLE_CATEGORY.${key}`),
      value,
    })), [t]);

  // TODO refactor !!!!!

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 700);

  const onChangeView = useCallback((newView: ArticleView) => {
    if (newView !== view) {
      dispatch(articlesListActions.setView(newView));
    }
  }, [dispatch, view]);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesListActions.setPage(1));
    dispatch(articlesListActions.setOrder(newOrder));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesListActions.setSort(newSort));
    dispatch(articlesListActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onSearch = useCallback((value: string) => {
    dispatch(articlesListActions.setSearch(value));
    dispatch(articlesListActions.setPage(1));
    debouncedFetchData();
  }, [debouncedFetchData, dispatch]);

  const onChangeCategory = useCallback((value: ChipContent) => {
    dispatch(articlesListActions.setCategory(value.value as ArticleCategory)); // TODO generic in Chips
    dispatch(articlesListActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <VStack gap='24'>
      <HStack justify='between'>
        <ArticleSort
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSwitcher view={view} changeView={onChangeView} />
      </HStack>

      <Search searchValue={search} onSearch={onSearch} />

      <HStack gap='4'>
        {/* TODO move to feature */}
        {ArticleCategoties.map((item) => (
          <Chip
            content={item}
            key={item.id}
            isSelected={item.value === category}
            className={styles.categoryChip}
            onSelectChip={onChangeCategory}
          />
        ))}
      </HStack>
    </VStack>
  );
});
