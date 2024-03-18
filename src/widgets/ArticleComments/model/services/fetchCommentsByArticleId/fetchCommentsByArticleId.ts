import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import i18n from '@/shared/config/i18n/i18n';
import { CommentData } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  CommentData[],
  string | undefined,
  ThunkConfig<string | undefined>
>('articleComments/fetchCommentsByArticleId', async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    if (!articleId) {
      throw new Error();
    }

    const response = await extra.api.get<CommentData[]>('/comments', {
      params: {
        articleId,
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
