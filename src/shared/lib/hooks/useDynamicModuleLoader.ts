import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StoreSchemaKey } from 'app/providers/store';
import { useEffect } from 'react';
import { useStore, useDispatch } from 'react-redux';

export type ReducersList<S> = { [name in StoreSchemaKey]?: Reducer<S> };

interface DynamicModuleLoaderProps<S> {
  reducers: ReducersList<S>
}

export const useDynamicModuleLoader = <S>({ reducers }: DynamicModuleLoaderProps<S>) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: [StoreSchemaKey, Reducer]) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      Object.keys(reducers).forEach((name: StoreSchemaKey) => {
        store.reducerManager.remove(name);
        dispatch({ type: `@DESTROY ${name} reducer` });
      });
    };
  }, [dispatch, reducers, store.reducerManager]);
};
