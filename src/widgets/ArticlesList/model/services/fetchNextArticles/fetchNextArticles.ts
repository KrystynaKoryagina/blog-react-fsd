// TODO test урок 56 Пагинация. Page. Бесконечная лента. Observer API. useInfiniteScroll

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { getArticlesListPage } from '../../selectors/getArticlesListPage/getArticlesListPage';
import { getArticlesListHasMore } from '../../selectors/getArticlesListHasMore/getArticlesListHasMore';
import { getArticlesListLoading } from '../../selectors/getArticlesListLoading/getArticlesListLoading';
import { articlesListActions } from '../../slice/articlesListSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const fetchNextArticles = createAsyncThunk<
void, void, ThunkConfig<string>>(
  'articles/fetchNextArticles',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const page = getArticlesListPage(getState());
    const hasMore = getArticlesListHasMore(getState());
    const isLoading = getArticlesListLoading(getState());

    if (hasMore && !isLoading) {
      const newPage = page + 1;

      dispatch(articlesListActions.setPage(newPage));
      dispatch(fetchArticles());
    }
  },
);
