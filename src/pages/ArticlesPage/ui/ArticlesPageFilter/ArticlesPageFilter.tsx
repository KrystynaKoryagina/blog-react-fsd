import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticleSort, ArticleSortField } from '@/features/ArticleSort';
import { ArticleViewSwitcher } from '@/features/ArticleViewSwitcher';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { SortOrder } from '@/shared/types/sort';
import {
  articlesListActions,
  getArticlesListOrder,
  getArticlesListSort,
  getArticlesListView,
  getArticlesListSearch,
  fetchArticles,
  getArticlesListCategory,
} from '@/widgets/ArticlesInfiniteList';
import { Search } from '@/features/Search';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { ChipContent } from '@/shared/ui/deprecated/Chip/types/chip';
import { ArticleCategory, ArticleView } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleFilter } from '@/features/ArticleFilter';
import { useArticlesListActions } from '@/widgets/ArticlesInfiniteList/model/slice/articlesListSlice';
import styles from './ArticlesPageFilter.module.scss';

// TODO get rid of dispatch
// move all sort methods to hook ????
export const ArticlesPageFilter = memo(() => {
  const view = useSelector(getArticlesListView);
  const order = useSelector(getArticlesListOrder);
  const sort = useSelector(getArticlesListSort);
  const category = useSelector(getArticlesListCategory);
  const search = useSelector(getArticlesListSearch);

  const { setView, setCategory } = useArticlesListActions();

  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 700);

  const onChangeView = useCallback(
    (newView: ArticleView) => {
      if (newView !== view) {
        // dispatch(articlesListActions.setView(newView));
        setView(newView);
        fetchData();
      }
    },
    [dispatch, view],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesListActions.setPage(1));
      dispatch(articlesListActions.setOrder(newOrder));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesListActions.setSort(newSort));
      dispatch(articlesListActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onSearch = useCallback(
    (value: string) => {
      dispatch(articlesListActions.setSearch(value));
      dispatch(articlesListActions.setPage(1));
      debouncedFetchData();
    },
    [debouncedFetchData, dispatch],
  );

  const onChangeCategory = useCallback(
    (value: ChipContent<ArticleCategory>) => {
      // dispatch(articlesListActions.setCategory(value.value));
      setCategory(value.value);
      dispatch(articlesListActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return (
    <VStack gap="24" className={styles.ArticlesPageFilter}>
      <HStack justify="between">
        <ArticleSort
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSwitcher view={view} changeView={onChangeView} />
      </HStack>

      <Search searchValue={search} onSearch={onSearch} />

      <ArticleFilter category={category} onChangeCategory={onChangeCategory} />
    </VStack>
  );
});
