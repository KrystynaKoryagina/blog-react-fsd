import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UICard.module.scss';
import { CardSize } from './types/card';
import { Flex } from '@/shared/ui/Stack';
import { FlexProps } from '@/shared/types/flex';

interface UICardProps extends FlexProps {
  size?: CardSize;
}

export const UICard = ({
  className,
  children,
  size = 'big',
  direction = 'column',
  ...otherProps
}: UICardProps) => {
  return (
    <Flex
      direction={direction}
      className={classNames(styles.Card, [className, styles[size]])}
      {...otherProps}
    >
      {children}
    </Flex>
  );
};
