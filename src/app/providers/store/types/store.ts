import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileStore } from 'entities/Profile';
import { UserStore } from 'entities/User';
import { LoginStore } from 'features/AuthByUserName';

export interface StoreSchema {
  user: UserStore,

  // Async Reducers
  login?: LoginStore,
  profile?: ProfileStore
}

export type StoreSchemaKey = keyof StoreSchema;

export interface ReducerManger {
  getReducerMap: () => ReducersMapObject<StoreSchema>,
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>,
  add: (key: StoreSchemaKey, reducer: Reducer) => void,
  remove: (key: StoreSchemaKey) => void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StoreSchema> {
  reducerManager: ReducerManger
}

export interface ThunkExtraArgs {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArgs
}

export type ReducersList = { [name in StoreSchemaKey]?: Reducer };
