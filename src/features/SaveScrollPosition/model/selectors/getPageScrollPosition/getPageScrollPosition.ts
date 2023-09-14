import { createSelector } from 'reselect';
import { StoreSchema } from '@/app/providers/store';

/*
  https://github.com/reduxjs/reselect

  const selectItemsByCategory = createSelector(
    state => state.items,
    // Take the second arg, `category`, and forward to the output selector
    (state, category) => category,
    // Output selector gets (`items, category)` as args
    (items, category) => items.filter(item => item.category === category)
  )
*/

const getScroll = (state: StoreSchema) => state.scroll.scroll;

export const getPageScrollPosition = createSelector(
  getScroll,
  (state: StoreSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
