import { memo } from 'react';
import { Text, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImage = memo(({ className, block }: ArticleImageProps) => (
  <VStack className={className} align="center">
    <img src={block.src} alt={block.title} />
    {block.title && (
      <Text size={TextSize.SM} align={TextAlign.CENTER}>
        {block.title}
      </Text>
    )}
  </VStack>
));
