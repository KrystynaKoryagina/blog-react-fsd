import { memo, useState } from 'react';
import styles from './UIStar.module.scss';
import { classNames } from '@/shared/lib/utils/classNames';
import StarIcon from '@/shared/assets/icons/star.svg';

const stars = [1, 2, 3, 4, 5];

interface StarProps {
  className?: string;
  size?: number;
  selectedStars: number;
  onSelect?: (count: number) => void;
}

export const UIStar = memo(
  ({ className, size = 30, selectedStars, onSelect }: StarProps) => {
    const [hoverStars, setHoverStars] = useState(0);

    const onMouseEnter = (starsCount: number) => () => {
      setHoverStars(starsCount);
    };

    const onMouseLeave = () => {
      setHoverStars(0);
    };

    const onClick = (starsCount: number) => () => {
      onSelect?.(starsCount);
    };

    return (
      <div className={className}>
        {stars.map((item) => (
          <StarIcon
            key={item}
            className={classNames(styles.icon, [], {
              [styles.iconFilled]: hoverStars >= item || selectedStars >= item,
            })}
            width={size}
            height={size}
            onMouseEnter={onMouseEnter(item)}
            onMouseLeave={onMouseLeave}
            onClick={onClick(item)}
          />
        ))}
      </div>
    );
  },
);
