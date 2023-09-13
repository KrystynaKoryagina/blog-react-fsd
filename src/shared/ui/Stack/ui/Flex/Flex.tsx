import { classNames } from 'shared/lib/utils/classNames';
import styles from './Flex.module.scss';
import {
  FlexAlign, FlexDirection, FlexGap, FlexJustify, FlexProps,
} from '../../types/stack';

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
};

const gapClasses: OptionalRecord<FlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  24: styles.gap24,
  32: styles.gap32,
};

export const Flex = ({
  className,
  children,
  direction,
  gap,
  justify,
  align,
  wrap,
}: FlexProps) => {
  const classes = [
    className,
    directionClasses[direction],
    justify && justifyClasses[justify],
    align && alignClasses[align],
    gap && gapClasses[gap],
    wrap && styles[wrap],
  ];

  return (
    <div className={classNames(styles.Flex, classes)}>
      {children}
    </div>
  );
};
