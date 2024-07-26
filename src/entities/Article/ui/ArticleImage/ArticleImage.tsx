import { memo } from 'react';
import { Text, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UIText } from '@/shared/ui/UIText';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImage = memo(({ className, block }: ArticleImageProps) => (
  <ToggleFeatureComponent
    featureName="isRedesignEnable"
    off={
      <VStack className={className} align="center">
        <img src={block.src} alt={block.title} />
        {block.title && (
          <Text size={TextSize.SM} align={TextAlign.CENTER}>
            {block.title}
          </Text>
        )}
      </VStack>
    }
    on={
      <VStack className={className} align="center">
        <img src={block.src} alt={block.title} />
        {block.title && (
          <UIText size="sm" align="center">
            {block.title}
          </UIText>
        )}
      </VStack>
    }
  />
));
