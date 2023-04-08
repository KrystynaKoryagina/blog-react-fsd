import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { StoreSchema } from '../types/store';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (
  initialState: StoreSchema,
  asyncReducers?: ReducersMapObject<StoreSchema>,
) => {
  const rootReducers: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // TODO
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
