import i18n from '@/shared/config/i18n/i18n';
import { Article } from '../../types/article';
import { buildAsyncThunk } from '@/shared/lib/store';

const fetchArticleByIdAsyncThunk = buildAsyncThunk<
  Article,
  string | undefined,
  string
>('articleDetails/fetchArticleById', async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    if (!articleId) {
      throw new Error(i18n.t('ARTICLE_NOT_FOUND'));
    }

    const response = await extra.api.get<Article>(`/articles/${articleId}`, {
      params: {
        _expand: 'user',
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

export const {
  asyncThunk: fetchArticleById,
  useAsyncThunk: useFetchArticleById,
} = fetchArticleByIdAsyncThunk;
