import { memo } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import { ChipContent, ChipType } from './types/chip';
import styles from './Chip.module.scss';

export interface ChipProps {
  content: ChipContent; // TODO make generic type
  variant?: ChipType;
  isSelected?: boolean;
  className?: string;
  onSelectChip?: (value: ChipContent) => void;
}

export const Chip = memo(({
  content,
  variant = ChipType.PRIMARY,
  className,
  isSelected,
  onSelectChip,
}: ChipProps) => {
  const onClickHandle = (value: ChipContent) => () => {
    onSelectChip?.(value);
  };

  return (
    <div
      className={classNames(styles.Chip, [styles[variant], className], {
        [styles.selected]: isSelected,
      })}
      onClick={onClickHandle(content)}
    >
      {content.displayName}
    </div>
  );
});
