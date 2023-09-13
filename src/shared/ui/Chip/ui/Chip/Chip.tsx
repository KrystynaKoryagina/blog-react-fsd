import { memo } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import { ChipContent } from '../../types/chip';
import { ChipType } from '../../consts/chip';
import styles from './Chip.module.scss';

export interface ChipProps<T extends string> {
  content: ChipContent<T>;
  variant?: ChipType;
  isSelected?: boolean;
  className?: string;
  onSelectChip?: (value: ChipContent<T>) => void;
}

const ChipComponent = <T extends string>({
  content,
  variant = ChipType.PRIMARY,
  className,
  isSelected,
  onSelectChip,
}: ChipProps<T>) => {
  const onClickHandle = (value: ChipContent<T>) => () => {
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
};

export const Chip = memo(ChipComponent) as typeof ChipComponent;
