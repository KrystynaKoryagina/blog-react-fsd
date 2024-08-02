import { memo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import { ChipContent } from './types/chip';
import styles from './UIChip.module.scss';

export interface UIChipProps<T extends string> {
  content: ChipContent<T>;
  isSelected?: boolean;
  className?: string;
  onSelectChip?: (value: ChipContent<T>) => void;
}

const ChipComponent = <T extends string>({
  content,
  className,
  isSelected,
  onSelectChip,
}: UIChipProps<T>) => {
  const onClickHandle = (value: ChipContent<T>) => () => {
    onSelectChip?.(value);
  };

  return (
    <div
      className={classNames(styles.Chip, [className], {
        [styles.selected]: isSelected,
      })}
      onClick={onClickHandle(content)}
    >
      {content.displayName}
    </div>
  );
};

export const UIChip = memo(ChipComponent) as typeof ChipComponent;
