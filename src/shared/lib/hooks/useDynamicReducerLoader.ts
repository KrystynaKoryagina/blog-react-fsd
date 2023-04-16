import { ReducersList, ReduxStoreWithManager, StoreSchemaKey } from 'app/providers/store';
import { useEffect } from 'react';
import { useStore, useDispatch } from 'react-redux';

interface DynamicReducerLoaderProps {
  reducers: ReducersList
}

export const useDynamicReducerLoader = ({ reducers }: DynamicReducerLoaderProps) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StoreSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      Object.keys(reducers).forEach((name) => {
        store.reducerManager.remove(name as StoreSchemaKey);
        dispatch({ type: `@DESTROY ${name} reducer` });
      });
    };
  }, [dispatch, reducers, store.reducerManager]);
};
