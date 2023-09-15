import { ReactNode } from 'react';

export interface DropdownItem {
  id: string;
  content: ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}
