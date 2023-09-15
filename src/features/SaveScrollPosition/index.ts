export type { ScrollPosition } from './model/types/scroll';
export type { ScrollStore } from './model/types/scrollStore';

export { scrollReducer, scrollActions } from './model/slice/scrollSlice';

export { getPageScrollPosition } from './model/selectors/getPageScrollPosition/getPageScrollPosition';
