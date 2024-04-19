import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UIAvatar.module.scss';
import UserIcon from '@/shared/assets/icons/user.svg';
import { UISkeleton } from '@/shared/ui/UISkeleton';
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
          fallback={
            <UISkeleton width={size} height={size} borderRadius="50%" />
          }
        />
      </div>
    );
  },
);
