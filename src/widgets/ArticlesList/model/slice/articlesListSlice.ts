import { ArticleSortField } from 'features/ArticleSort';
import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/store';
import { Article, ArticleCategory } from 'entities/Article';
import { ArticleView } from 'features/ArticleViewSwitcher';
import { ARTICLES_VIEW } from 'shared/constants/localStorage';
import { SortOrder } from 'shared/types/sort';
import { ARTICLES_GRID_COUNT, ARTICLES_LIST_COUNT } from 'shared/constants/articles';
import { ArticlesListStore } from '../types/articlesListStore';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StoreSchema>(
  (state) => state.articlesList || articlesAdapter.getInitialState(),
);

export const initialState: ArticlesListStore = {
  entities: {},
  ids: [],
  isLoading: false,
  view: 'grid',
  order: 'asc',
  sort: ArticleSortField.CREATED,
  category: ArticleCategory.ALL,
  page: 1,
  hasMore: true,
  limit: ARTICLES_GRID_COUNT,
  _inited: false,
};

const articlesListSlice = createSlice({
  name: 'articleList',
  initialState: articlesAdapter.getInitialState<ArticlesListStore>(initialState),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW, action.payload);
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setCategory: (state, action: PayloadAction<ArticleCategory>) => {
      state.category = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW) as ArticleView;
      state.view = view;
      state.limit = view === 'list' ? ARTICLES_LIST_COUNT : ARTICLES_GRID_COUNT;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;

        if (action?.meta?.arg?.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(
        fetchArticles.fulfilled,
        (state, action) => {
          state.isLoading = false;

          // NOTE Should come from BE
          state.hasMore = action.payload?.length >= state?.limit;

          if (action?.meta?.arg?.replace) {
            // NOTE for filtering we should update list
            articlesAdapter.setAll(state, action.payload);
          } else {
            // NOTE for infinite scroll we should add to the end of the list
            articlesAdapter.addMany(state, action.payload);
          }
        },
      )
      .addCase(fetchArticles.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { reducer: articlesListReducer } = articlesListSlice;
export const { actions: articlesListActions } = articlesListSlice;
