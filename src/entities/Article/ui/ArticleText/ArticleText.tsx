import { memo } from 'react';
import { TextSize, Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleText = memo(({ className, block }: ArticleTextProps) => (
  <VStack className={className} gap="16">
    {block.title && <Text>{block.title}</Text>}
    <VStack>
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} size={TextSize.SM}>
          {paragraph}
        </Text>
      ))}
    </VStack>
  </VStack>
));
