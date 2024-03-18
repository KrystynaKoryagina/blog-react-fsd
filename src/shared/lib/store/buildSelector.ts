/*
  NOTE
  buildSelector - it's a wrapper that helps avoid using useSelector in the components.
  Just use useSelectorHook.
*/

import { useSelector } from 'react-redux';
import { StoreSchema } from '@/app/providers/store';

type Selector<T, Args extends any[]> = (store: StoreSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

// TODO update all selectors with buildSelector
export const buildSelector = <T, Args extends any[]>(
  selector: Selector<T, Args>,
): Result<T, Args> => {
  const useSelectorHook: Hook<T, Args> = (...args: Args) =>
    useSelector((store: StoreSchema) => selector(store, ...args));

  return [useSelectorHook, selector];
};
