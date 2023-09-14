import { memo, useMemo } from 'react';
import { Card } from '@/shared/ui/Card';
import { Text, TextSize } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonType } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { RoutePath } from '@/shared/config/routes/routes';
import { Link } from 'react-router-dom';
import { HStack, VStack } from '@/shared/ui/Stack';
import styles from './ArticleListView.module.scss';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleText } from '../ArticleText/ArticleText';
import { ArticleBlockType } from '../../model/consts/article';

interface ArticleListViewProps {
  article: Article
}

export const ArticleListView = memo(({ article }: ArticleListViewProps) => {
  const { t } = useTranslation();

  const textBlock = useMemo(() => article?.blocks?.find(
    (block) => block.type === ArticleBlockType.TEXT,
  ), [article.blocks]) as ArticleTextBlock;

  return (
    <Card>
      <VStack gap='16'>
        <HStack justify='between' align='center'>
          <HStack gap='4' align='center'>
            <Avatar size={30} src={article.user.avatar} />
            <Text>{article.user.username}</Text>
          </HStack>
          <Text>{article.createdAt}</Text>
        </HStack>

        <VStack gap='16'>
          <VStack gap='4'>
            <Text>{article?.title}</Text>
            <Text size={TextSize.XS} title={article.category.join(' ')}>
              {article.category.join(' ')}
            </Text>
          </VStack>

          <img src={article.img} className={styles.img} alt={article.title} />
          <ArticleText className={styles.textBlock} block={textBlock} />
        </VStack>

        <HStack align='center' justify='between'>
          <Button
            variant={ButtonType.OUTLINE}
            href={`${RoutePath.ARTICLE_DETAILS}/${article.id}`}
          >
            {t('BUTTONS.READ')}
          </Button>

          <HStack gap='8' align='center'>
            <Text size={TextSize.SM}>{article.views}</Text>
            <EyeIcon />
          </HStack>
        </HStack>
      </VStack>
    </Card>
  );
});
