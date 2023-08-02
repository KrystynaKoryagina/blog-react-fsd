import { AddCommentFormStore } from 'features/AddCommentForm';
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleStore } from 'entities/Article';
import { UserStore } from 'entities/User';
import { LoginStore } from 'features/AuthByUserName';
import { ProfileStore } from 'features/EditProfileCard';
import { ArticleCommentsStore } from 'widgets/ArticleComments';
import { ArticlesListStore } from 'pages/ArticlesPage';
import { ScrollStore } from 'features/SaveScrollPosition';

export interface StoreSchema {
  user: UserStore;
  scroll: ScrollStore;

  // Async Reducers
  login?: LoginStore;
  profile?: ProfileStore;
  article?: ArticleStore;
  articleComments?: ArticleCommentsStore;
  addCommentForm?: AddCommentFormStore;
  articlesList?: ArticlesListStore;
}

export type StoreSchemaKey = keyof StoreSchema;

export interface ReducerManger {
  getReducerMap: () => ReducersMapObject<StoreSchema>;
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>;
  add: (key: StoreSchemaKey, reducer: Reducer) => void;
  remove: (key: StoreSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StoreSchema> {
  reducerManager: ReducerManger
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StoreSchema;
}

export type ReducersList = { [name in StoreSchemaKey]?: Reducer };
