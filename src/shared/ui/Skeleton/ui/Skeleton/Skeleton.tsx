import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  height?: string | number
  width?: string | number
  borderRadius?: string
  className?: string
}

export const Skeleton = memo(({
  height, width, borderRadius, className,
}: SkeletonProps) => {
  const style: CSSProperties = {
    height,
    width,
    borderRadius,
  };

  return (
    <div
      className={classNames(styles.Skeleton, [className])}
      style={style}
    />
  );
});
