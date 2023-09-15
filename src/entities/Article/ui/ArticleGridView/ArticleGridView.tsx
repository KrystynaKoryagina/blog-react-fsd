import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Card } from '@/shared/ui/Card';
import { Text, TextSize } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Link } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routes/routes';
import { HStack, VStack } from '@/shared/ui/Stack';
import styles from './ArticleGridView.module.scss';
import { Article } from '../../model/types/article';

interface ArticleGridViewProps {
  article: Article
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleGridView = memo(({ article, target }: ArticleGridViewProps) => (
  <Link className={styles.ArticleGridView} to={`${RoutePath.ARTICLE_DETAILS}/${article.id}`} target={target}>
    <Card className={styles.gridCard}>
      <VStack justify='between' className={styles.gridCardContent}>
        <div className={styles.imageWrapper}>
          <img alt={article.title} src={article.img} className={styles.img} />
          <Text className={styles.date} size={TextSize.SM}>{article.createdAt}</Text>
        </div>

        <VStack gap='4'>
          <Text className={styles.category} size={TextSize.SM} title={article.category.join(' ')}>
            {article.category.join(' ')}
          </Text>
          <HStack gap='8'>
            <Text size={TextSize.SM}>{article.views}</Text>
            <EyeIcon />
          </HStack>
          <Text className={styles.title} title={article.title}>{article.title}</Text>
        </VStack>
      </VStack>
    </Card>
  </Link>
));
