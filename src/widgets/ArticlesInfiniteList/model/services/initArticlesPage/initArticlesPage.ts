import { ThunkConfig } from '@/app/providers/store';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/features/ArticleSort';
import { ArticleCategory } from '@/entities/Article';
import { articlesListActions } from '../../slice/articlesListSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { getArticlesListInited } from '../../selectors/getArticlesListInited/getArticlesListInited';
import { buildAsyncThunk } from '@/shared/lib/store';

const initArticlesPage = buildAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articles/initArticlesPage', async (searchParams, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;

  const inited = getArticlesListInited(getState());

  // TODO overwrite default values from slice to null. Fix it
  if (!inited) {
    const order = (searchParams.get('order') as SortOrder) || 'asc';
    const sort = searchParams.get('sort') as ArticleSortField;
    const category = searchParams.get('category') as ArticleCategory;
    const search = searchParams.get('search') || '';

    dispatch(articlesListActions.setOrder(order));
    dispatch(articlesListActions.setSort(sort));
    dispatch(articlesListActions.setSearch(search));
    dispatch(articlesListActions.setCategory(category));

    dispatch(articlesListActions.initState());
    dispatch(fetchArticles());
  }
});

export const { useAsyncThunk: useInitArticlesPage } = initArticlesPage;
