import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleStore } from '../types/articleStore';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';

const initialState: ArticleStore = {
  data: null,
  isLoading: false,
  error: null,
};

export const articleSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
