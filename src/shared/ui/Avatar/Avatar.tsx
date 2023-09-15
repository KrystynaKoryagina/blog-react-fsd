import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
  src?: string
  alt?: string
  size?: number
  className?: string
}

export const Avatar = memo(({
  src, alt, size, className,
}: AvatarProps) => {
  const style = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <div
      className={classNames(styles.Avatar, [className])}
      style={style}
    >
      <img
        alt={alt}
        src={src}
        className={styles.img}
      />
    </div>
  );
});
