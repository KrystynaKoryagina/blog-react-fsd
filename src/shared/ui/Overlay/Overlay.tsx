import { memo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo(({ className, onClick }: OverlayProps) => (
  <div className={classNames(styles.overlay, [className])} onClick={onClick} />
));
