import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName';
import { Store } from '../types/store';

export function createReduxStore(initialState?: Store) {
  const rootReducers: ReducersMapObject<Store> = {
    user: userReducer,
    login: loginReducer,
  };

  return configureStore<Store>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
