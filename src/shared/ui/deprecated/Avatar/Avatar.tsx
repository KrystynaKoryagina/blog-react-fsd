import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './Avatar.module.scss';
import UserIcon from '@/shared/assets/icons/user.svg';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { UIImage } from '@/shared/ui/UIImage';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}
/**
 * @deprecated Use `UIAvatar` instead.
 */
export const Avatar = memo(
  ({ src, alt, size = 100, className }: AvatarProps) => {
    const style = useMemo<CSSProperties>(
      () => ({
        width: size,
        height: size,
      }),
      [size],
    );

    return (
      <div className={classNames(styles.Avatar, [className])} style={style}>
        <UIImage
          alt={alt}
          src={src}
          className={styles.img}
          errorFallback={<UserIcon width={size} height={size} />}
          fallback={<Skeleton width={size} height={size} borderRadius="50%" />}
        />
      </div>
    );
  },
);
