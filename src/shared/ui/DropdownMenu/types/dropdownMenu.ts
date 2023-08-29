import { ReactNode } from 'react';

export interface DropdownItem {
  id: string;
  content: ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}

export type DropdownDirection = 'top left' | 'top right' | 'bottom left' | 'bottom right';