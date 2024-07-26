import { memo } from 'react';
import { TextSize, Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';
import { ArticleTextBlock } from '../../model/types/article';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UIText } from '@/shared/ui/UIText';

interface ArticleTextProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleText = memo(({ className, block }: ArticleTextProps) => (
  <ToggleFeatureComponent
    featureName="isRedesignEnable"
    off={
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
    }
    on={
      <VStack className={className} gap="16">
        {block.title && <UIText>{block.title}</UIText>}
        <VStack>
          {block.paragraphs.map((paragraph) => (
            <UIText key={paragraph} size="sm">
              {paragraph}
            </UIText>
          ))}
        </VStack>
      </VStack>
    }
  />
));
