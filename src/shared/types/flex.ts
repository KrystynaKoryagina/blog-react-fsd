import { HTMLAttributes, ReactNode } from 'react';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: FlexGap;
  wrap?: FlexWrap;
  max?: boolean;
}

export type FlexDirection = 'row' | 'column';
export type FlexJustify = 'start' | 'end' | 'center' | 'between';
export type FlexAlign = 'start' | 'end' | 'center';
export type FlexWrap = 'nowrap' | 'wrap';
export type FlexGap = '0' | '4' | '8' | '16' | '24' | '32';
