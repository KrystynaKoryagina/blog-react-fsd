import { memo, useMemo } from 'react';
import { Card } from 'shared/ui/Card';
import { Text, TextSize } from 'shared/ui/Text';
import {
  Article, ArticleBlockType, ArticleText, ArticleTextBlock,
} from 'entities/Article';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonType } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routes/routes';
import { Link } from 'react-router-dom';
import styles from './ArticleListView.module.scss';

interface ArticleListViewProps {
  article: Article
}

export const ArticleListView = memo(({ article }: ArticleListViewProps) => {
  const { t } = useTranslation();

  const textBlock = useMemo(() => article?.blocks?.find(
    (block) => block.type === ArticleBlockType.TEXT,
  ), [article.blocks]) as ArticleTextBlock;

  return (
    <Card className={styles.ArticleListView}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Avatar size={30} src={article.user.avatar} />
          <Text className={styles.username}>{article.user.username}</Text>
        </div>
        <Text className={styles.date}>{article.createdAt}</Text>
      </div>

      <div className={styles.main}>
        <Text>{article?.title}</Text>
        <Text className={styles.category} size={TextSize.XS} title={article.category.join(' ')}>
          {article.category.join(' ')}
        </Text>
        <img src={article.img} className={styles.img} alt={article.title} />
        <ArticleText className={styles.textBlock} block={textBlock} />
      </div>

      <div className={styles.footer}>
        <Link to={`${RoutePath.ARTICLE_DETAILS}/${article.id}`}>
          <Button variant={ButtonType.OUTLINE}>
            {t('BUTTONS.READ')}
          </Button>
        </Link>

        <div className={styles.views}>
          <Text className={styles.viewsText} size={TextSize.SM}>{article.views}</Text>
          <EyeIcon />
        </div>
      </div>
    </Card>
  );
});
