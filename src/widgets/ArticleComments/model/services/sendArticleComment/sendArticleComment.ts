import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import i18n from '@/shared/config/i18n/i18n';
import { CommentData } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { getArticleData } from '../../selectors/getArticleData/getArticleData';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const sendArticleComment = createAsyncThunk<
CommentData, string, ThunkConfig<string>>(
  'articleComments/sendArticleComment',
  async (comment, thunkAPI) => {
    const {
      extra, rejectWithValue, dispatch, getState,
    } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticleData(getState());

    if (!comment || !userData || !article) {
      throw new Error();
    }

    try {
      const response = await extra.api.post<CommentData>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text: comment,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (err) {
      // TODO add translation
      return rejectWithValue(i18n.t('Something went wrong.'));
    }
  },
);
