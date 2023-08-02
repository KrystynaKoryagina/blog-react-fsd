import { memo } from 'react';
import { TextSize, Text } from 'shared/ui/Text';
import { classNames } from 'shared/lib/utils/classNames';
import cls from './ArticleText.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleText = memo(({ className, block }: ArticleTextProps) => (
  <div className={classNames(cls.ArticleText, [className])}>
    {block.title && (
      <Text className={cls.title}>{block.title}</Text>
    )}
    {block.paragraphs.map((paragraph) => (
      <Text key={paragraph} className={cls.paragraph} size={TextSize.SM}>{paragraph}</Text>
    ))}
  </div>
));
