import { memo } from 'react';
import styles from './UILogo.module.scss';
import { HStack } from '@/shared/ui/Stack';
import LogoIcon from '@/shared/assets/icons/logo.svg';
import { classNames } from '@/shared/lib/utils/classNames';

interface UILogoProps {
  className?: string;
  size?: number;
}

export const UILogo = memo(({ className, size = 50 }: UILogoProps) => {
  return (
    <HStack justify="center" className={classNames(styles.UILogo, [className])}>
      <LogoIcon
        width={size}
        height={size}
        color="black"
        className={styles.logoIcon}
      />
      <div className={styles.gradientBig} />
      <div className={styles.gradientSmall} />
    </HStack>
  );
});
