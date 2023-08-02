import { memo } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import { Code } from 'shared/ui/Code';
import styles from './ArticleCode.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCode = memo(({ className, block }: ArticleCodeProps) => (
  <div className={classNames(styles.ArticleCode, [className])}>
    <Code value={block.code} />
  </div>
));
