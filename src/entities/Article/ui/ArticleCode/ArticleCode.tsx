import { memo } from 'react';
import { Code } from '@/shared/ui/deprecated/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UICode } from '@/shared/ui/UICode';

interface ArticleCodeProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCode = memo(({ className, block }: ArticleCodeProps) => (
  <ToggleFeatureComponent
    featureName="isRedesignEnable"
    off={<Code value={block.code} className={className} />}
    on={<UICode value={block.code} className={className} />}
  />
));
