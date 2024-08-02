import { ReactNode } from 'react';
import { To } from 'react-router-dom';

/**
 * @deprecated Use `DropdownItem` from UIDropdown.
 */
export interface DropdownItem {
  id: string;
  content: ReactNode;
  disabled?: boolean;
  href?: To;
  onClick?: () => void;
}
