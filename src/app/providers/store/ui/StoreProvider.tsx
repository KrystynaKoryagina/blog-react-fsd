import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store.config';
import { StoreSchema } from '../types/store';

interface StoreProviderProps {
  initialState?: StoreSchema | DeepPartial<StoreSchema>
  asyncReducers?: ReducersMapObject<StoreSchema> | DeepPartial<ReducersMapObject<StoreSchema>>,
}

export const StoreProvider: FC<StoreProviderProps> = (
  { children, initialState, asyncReducers },
) => {
  const store = createReduxStore(
    initialState as StoreSchema,
    asyncReducers as ReducersMapObject<StoreSchema>,
  );

  return (
    <Provider store={store}>{children}</Provider>
  );
};
