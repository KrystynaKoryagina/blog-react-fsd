/*
  <page, scroll position>
  { 'articles': 1000 }
*/

export type ScrollPosition = OptionalRecord<string, number>;

export interface PageScroll {
  path: string;
  position: number;
}
