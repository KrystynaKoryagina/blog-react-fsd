import { memo } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import { Text, TextAlign, TextSize } from 'shared/ui/Text';
import styles from './ArticleImage.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImage = memo(({ className, block }: ArticleImageProps) => (
  <div className={classNames(styles.ArticleImage, [className])}>
    <img src={block.src} alt={block.title} className={styles.img} />
    {block.title && (
      <Text size={TextSize.SM} align={TextAlign.CENTER}>{block.title}</Text>
    )}
  </div>
));
