import { memo } from 'react';
import { Code } from '@/shared/ui/deprecated/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCode = memo(({ className, block }: ArticleCodeProps) => (
  <div className={className}>
    <Code value={block.code} />
  </div>
));
