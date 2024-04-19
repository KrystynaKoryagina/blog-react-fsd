import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UISkeleton.module.scss';

interface UISkeletonProps {
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
  className?: string;
}

export const UISkeleton = memo(
  ({ height, width, borderRadius, className }: UISkeletonProps) => {
    const style: CSSProperties = {
      height,
      width,
      borderRadius,
    };

    return (
      <div className={classNames(styles.Skeleton, [className])} style={style} />
    );
  },
);
