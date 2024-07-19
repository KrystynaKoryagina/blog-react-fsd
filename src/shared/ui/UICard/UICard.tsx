import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UICard.module.scss';
import { CardPadding } from './types/card';
import { Flex } from '@/shared/ui/Stack';
import { FlexProps } from '@/shared/types/flex';

interface UICardProps extends FlexProps {
  padding?: CardPadding;
}

const paddingClasses: OptionalRecord<CardPadding, string> = {
  0: styles.padding0,
  2: styles.padding2,
  16: styles.padding16,
  24: styles.padding24,
};

export const UICard = ({
  className,
  children,
  padding = '24',
  direction = 'column',
  ...otherProps
}: UICardProps) => {
  return (
    <Flex
      direction={direction}
      className={classNames(styles.Card, [className, paddingClasses[padding]])}
      {...otherProps}
    >
      {children}
    </Flex>
  );
};
