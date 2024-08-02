import { memo, useState } from 'react';
import styles from './StarRating.module.scss';
import { classNames } from '@/shared/lib/utils/classNames';
import StarIcon from '@/shared/assets/icons/deprecated/star.svg';

const stars = [1, 2, 3, 4, 5];

interface StarRatingProps {
  className?: string;
  size?: number;
  selectedStars: number;
  onSelect?: (count: number) => void;
}

/**
 * @deprecated Use `UIStarRating` instead.
 */
export const StarRating = memo(
  ({ className, size = 30, selectedStars, onSelect }: StarRatingProps) => {
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
      <div className={classNames(styles.StarRating, [className])}>
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
