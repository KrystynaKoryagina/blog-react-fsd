import { FC } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import styles from './ButtonGroup.module.scss';

interface ButtonGroupProps {
  className?: string
}

export const ButtonGroup: FC<ButtonGroupProps> = ({ children, className }) => (
  <div
    className={classNames(
      styles.ButtonGroup,
      [className],
    )}
  >
    {children}
  </div>
);
