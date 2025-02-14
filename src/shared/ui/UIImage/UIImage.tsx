import {
  ImgHTMLAttributes,
  ReactElement,
  memo,
  useLayoutEffect,
  useState,
} from 'react';
import styles from './UIImage.module.scss';
import { classNames } from '@/shared/lib/utils/classNames';

interface UIImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const UIImage = memo(
  ({
    className,
    src,
    alt = '',
    fallback,
    errorFallback,
    ...otherProps
  }: UIImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
      const img = new Image();
      img.src = src ?? '';

      img.onload = () => {
        setIsLoading(false);
      };

      img.onerror = () => {
        setIsLoading(false);
        setHasError(true);
      };
    }, [src]);

    if (isLoading && fallback) {
      return fallback;
    }

    if (hasError && errorFallback) {
      return errorFallback;
    }

    return (
      <div className={classNames(styles.UIImageWrapper, [className])}>
        <img className={styles.img} src={src} alt={alt} {...otherProps} />
      </div>
    );
  },
);
