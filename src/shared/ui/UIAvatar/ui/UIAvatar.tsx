import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UIAvatar.module.scss';
import UserIcon from '@/shared/assets/icons/user.svg';
import { Skeleton } from '@/shared/ui/Skeleton';
import { UIImage } from '@/shared/ui/UIImage';

interface UIAvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

export const UIAvatar = memo(
  ({ src, alt, size = 100, className }: UIAvatarProps) => {
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
