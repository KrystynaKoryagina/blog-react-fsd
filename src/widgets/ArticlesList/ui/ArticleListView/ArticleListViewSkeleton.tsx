import { memo } from 'react';
import { Card } from 'shared/ui/Card';
import { Skeleton } from 'shared/ui/Skeleton';
import styles from './ArticleListView.module.scss';

export const ArticleListViewSkeleton = memo(() => (
  <Card className={styles.ArticleListView}>
    <div className={styles.header}>
      <div className={styles.user}>
        <Skeleton borderRadius='50%' height={30} width={30} />
        <Skeleton width={150} height={16} className={styles.username} />
      </div>
      <Skeleton width={150} height={16} className={styles.date} />
    </div>

    <div className={styles.main}>
      <Skeleton width={250} height={24} />
      <Skeleton className={styles.category} width={150} height={16} />
      <Skeleton height={300} className={styles.img} />
    </div>

    <div className={styles.footer}>
      <Skeleton height={36} width={200} />
    </div>
  </Card>
));
