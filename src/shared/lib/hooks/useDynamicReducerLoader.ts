import { useEffect } from 'react';
import { useStore } from 'react-redux';
import {
  ReducersList,
  ReduxStoreWithManager,
  StoreSchemaKey,
} from '@/app/providers/store';
import { useAppDispatch } from './useAppDispatch';

interface DynamicReducerLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const useDynamicReducerLoader = ({
  reducers,
  removeAfterUnmount = true,
}: DynamicReducerLoaderProps) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const isMounted = mountedReducers[name as StoreSchemaKey];

      if (!isMounted) {
        store.reducerManager.add(name as StoreSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((name) => {
          store.reducerManager.remove(name as StoreSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);
};
