import { Article } from '@/entities/Article';
import i18n from '@/shared/config/i18n/i18n';
import { addQueryParams } from '@/shared/lib/utils/addQueryParams/addQueryParams';
import { getArticlesListLimit } from '../../selectors/getArticlesListLimit/getArticlesListLimit';
import { getArticlesListPage } from '../../selectors/getArticlesListPage/getArticlesListPage';
import { getArticlesListOrder } from '../../selectors/getArticlesListOrder/getArticlesListOrder';
import { getArticlesListSort } from '../../selectors/getArticlesListSort/getArticlesListSort';
import { getArticlesListSearch } from '../../selectors/getArticlesListSearch/getArticlesListSearch';
import { ArticlesListRequest } from '../../types/articlesList';
import { getArticlesListCategory } from '../../selectors/getArticlesListCategory/getArticlesListCategory';
import { buildAsyncThunk } from '@/shared/lib/store';

const fetchArticlesThunk = buildAsyncThunk<
  Article[],
  ArticlesListRequest | undefined,
  string | undefined
>('articles/fetchArticles', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const page = getArticlesListPage(getState());
  const limit = getArticlesListLimit(getState());
  const order = getArticlesListOrder(getState());
  const sort = getArticlesListSort(getState());
  const category = getArticlesListCategory(getState());
  const search = getArticlesListSearch(getState()) || '';

  try {
    addQueryParams({
      order,
      sort,
      category,
      search,
    });

    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        category_like: category === 'ALL' ? undefined : category,
        q: search,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (err) {
    // TODO add translation
    return rejectWithValue(i18n.t('Something went wrong.'));
  }
});

export const { asyncThunk: fetchArticles, useAsyncThunk: useFetchArticles } =
  fetchArticlesThunk;
