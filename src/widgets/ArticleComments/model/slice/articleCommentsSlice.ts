import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { CommentData } from 'entities/Comment';
import { StoreSchema } from 'app/providers/store';
import { ArticleCommentsStore } from '../types/articleCommentsStore';
import { fetchCommentsByArticleId }
  from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const articleCommentsAdapter = createEntityAdapter<CommentData>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = articleCommentsAdapter.getSelectors<StoreSchema>(
  (state) => state.articleComments || articleCommentsAdapter.getInitialState(),
);

const articleCommentsSlice = createSlice({
  name: 'articleComments',
  initialState: articleCommentsAdapter.getInitialState<ArticleCommentsStore>({
    entities: {},
    ids: [],
    isLoading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<CommentData[]>) => {
          state.isLoading = false;
          articleCommentsAdapter.setAll(state, action.payload);
        },
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { reducer: articleCommentsReducer } = articleCommentsSlice;
