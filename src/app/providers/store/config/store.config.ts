import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { $axios_api } from 'shared/api/axios';
import { scrollReducer } from 'features/SaveScrollPosition';
import { StoreSchema, ThunkExtraArgs } from '../types/store';
import { createReducerManager } from './reducerManager';
import { rtkApi } from 'shared/api/rtkQuery';

export const createReduxStore = (
  initialState?: StoreSchema,
  asyncReducers?: ReducersMapObject<StoreSchema>,
) => {
  const rootReducers: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    user: userReducer,
    scroll: scrollReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArgument: ThunkExtraArgs = {
    api: $axios_api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }).concat(rtkApi.middleware),
  });

  // TODO
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
