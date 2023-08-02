import { memo } from 'react';
import { Card } from 'shared/ui/Card';
import { Text, TextSize } from 'shared/ui/Text';
import { Article } from 'entities/Article';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routes/routes';
import styles from './ArticleGridView.module.scss';

interface ArticleGridViewProps {
  article: Article
}

export const ArticleGridView = memo(({ article }: ArticleGridViewProps) => (
  <Link to={`${RoutePath.ARTICLE_DETAILS}/${article.id}`}>
    <Card className={styles.ArticleGridView}>
      <div className={styles.imageWrapper}>
        <img alt={article.title} src={article.img} className={styles.img} />
        <Text className={styles.date} size={TextSize.SM}>{article.createdAt}</Text>
      </div>

      <div className={styles.infoWrapper}>
        <Text className={styles.types} size={TextSize.SM} title={article.category.join(' ')}>
          {article.category.join(' ')}
        </Text>
        <Text className={styles.views} size={TextSize.SM}>{article.views}</Text>
        <EyeIcon />
      </div>
      <Text className={styles.title} title={article.title}>{article.title}</Text>
    </Card>
  </Link>
));
