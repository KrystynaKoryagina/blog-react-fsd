// TODO test урок 56 Пагинация. Page. Бесконечная лента. Observer API. useInfiniteScroll

import { AnyAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { articlesListActions } from '../../slice/articlesListSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const filterArticles = createAsyncThunk<
void, AnyAction, ThunkConfig<string>>(
  'articles/filterArticles',
  async (action, thunkAPI) => {
    const { dispatch } = thunkAPI;

    dispatch(action);
    dispatch(articlesListActions.setPage(1));
    dispatch(fetchArticles({ replace: true }));
  },
);
