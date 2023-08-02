import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import i18n from 'shared/config/i18n/i18n';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      // TODO add translation
      return rejectWithValue(i18n.t('Something went wrong.'));
    }
  },
);
