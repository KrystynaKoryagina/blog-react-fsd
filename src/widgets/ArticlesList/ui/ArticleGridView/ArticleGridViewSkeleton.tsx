import { memo } from 'react';
import { Card } from 'shared/ui/Card';
import { Skeleton } from 'shared/ui/Skeleton';
import styles from './ArticleGridView.module.scss';

export const ArticleGridViewSkeleton = memo(() => (
  <Card className={styles.ArticleGridView}>
    <div className={styles.imageWrapper}>
      <Skeleton height={250} className={styles.img} />
    </div>

    <div className={styles.infoWrapper}>
      <Skeleton className={styles.types} width={130} height={16} />
    </div>

    <Skeleton height={16} className={styles.title} />
  </Card>
));
