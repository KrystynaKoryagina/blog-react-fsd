import { DeepPartial } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store.config';
import { Store } from '../types/store';

interface StoreProviderProps {
  initialState?: Store | DeepPartial<Store>
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as Store);

  return (
    <Provider store={store}>{children}</Provider>
  );
};
