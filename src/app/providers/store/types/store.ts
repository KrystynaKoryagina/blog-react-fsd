import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AddCommentFormStore } from '@/features/AddCommentForm';
import { ArticleStore } from '@/entities/Article';
import { UserStore } from '@/entities/User';
import { LoginStore } from '@/features/AuthByUserName';
import { ProfileStore } from '@/features/EditProfileCard';
import { ArticleCommentsStore } from '@/widgets/ArticleComments';
import { ScrollStore } from '@/features/SaveScrollPosition';
import { rtkApi } from '@/shared/api/rtkQuery';
import { ArticlesListStore } from '@/widgets/ArticlesList';

export interface StoreSchema {
  user: UserStore;
  scroll: ScrollStore;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

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
  reducerManager: ReducerManger;
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StoreSchema;
}

export type ReducersList = {
  [name in StoreSchemaKey]?: Reducer<NonNullable<StoreSchema[name]>>;
};
