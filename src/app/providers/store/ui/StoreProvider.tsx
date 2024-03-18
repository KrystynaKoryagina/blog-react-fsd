import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store.config';
import { StoreSchema } from '../types/store';

interface StoreProviderProps {
  initialState?: StoreSchema | DeepPartial<StoreSchema>;
  asyncReducers?:
    | ReducersMapObject<StoreSchema>
    | DeepPartial<ReducersMapObject<StoreSchema>>;
  children?: ReactNode;
}

export const StoreProvider = ({
  children,
  initialState,
  asyncReducers,
}: StoreProviderProps) => {
  const store = createReduxStore(
    initialState as StoreSchema,
    asyncReducers as ReducersMapObject<StoreSchema>,
  );

  return <Provider store={store}>{children}</Provider>;
};
