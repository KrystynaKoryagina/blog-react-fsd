import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UIAvatar.module.scss';
import UserIcon from '@/shared/assets/icons/user.svg';
import { UISkeleton } from '@/shared/ui/UISkeleton';
import { UIImage } from '@/shared/ui/UIImage';
import { HStack } from '@/shared/ui/Stack';
import { UIText } from '@/shared/ui/UIText';
import { TextSize, TextWeight } from '@/shared/types/text';

interface UIAvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  userName?: string;
  textSize?: TextSize;
  textWeight?: TextWeight;
  className?: string;
}

export const UIAvatar = memo(
  ({
    src,
    alt,
    size = 100,
    className,
    userName,
    textSize,
    textWeight,
  }: UIAvatarProps) => {
    const style = useMemo<CSSProperties>(
      () => ({
        width: size,
        height: size,
      }),
      [size],
    );

    const AvatarImgJSX = (
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

    if (userName) {
      return (
        <HStack gap="4" align="center">
          {AvatarImgJSX}
          <UIText size={textSize} weight={textWeight}>
            {userName}
          </UIText>
        </HStack>
      );
    }

    return AvatarImgJSX;
  },
);
