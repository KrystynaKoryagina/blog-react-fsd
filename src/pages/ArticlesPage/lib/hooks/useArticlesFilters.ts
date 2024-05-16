import { ArticleCategory, ArticleView } from '@/entities/Article';
import { ArticleSortField } from '@/features/ArticleSort';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import { ChipContent } from '@/shared/ui/deprecated/Chip';
import {
  articlesListActions,
  fetchArticles,
  getArticlesListCategory,
  getArticlesListOrder,
  getArticlesListSearch,
  getArticlesListSort,
  getArticlesListView,
  useArticlesListActions,
} from '@/widgets/ArticlesInfiniteList';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

export const useArticlesFilters = () => {
  const view = useSelector(getArticlesListView);
  const order = useSelector(getArticlesListOrder);
  const sort = useSelector(getArticlesListSort);
  const category = useSelector(getArticlesListCategory);
  const search = useSelector(getArticlesListSearch);

  const { setView, setCategory } = useArticlesListActions();

  // TODO get rid of dispatch
  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 700);

  const onChangeView = useCallback(
    (newView: ArticleView) => {
      if (newView !== view) {
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
      setCategory(value.value);
      dispatch(articlesListActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return {
    view,
    sort,
    order,
    search,
    category,
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeCategory,
    onSearch,
  };
};
