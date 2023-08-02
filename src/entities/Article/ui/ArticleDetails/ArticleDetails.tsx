import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/utils/classNames';
import { Skeleton } from 'shared/ui/Skeleton';
import { ReducersList } from 'app/providers/store';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import {
  Text, TextAlign, TextSize, TextType,
} from 'shared/ui/Text';
import { Avatar } from 'shared/ui/Avatar';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routes/routes';
import { articleReducer } from '../../model/slice/articleSlice';
import { getArticleLoading }
  from '../../model/selectors/getArticleLoading/getArticleLoading';
import { getArticleData }
  from '../../model/selectors/getArticleData/getArticleData';
import { getArticleError }
  from '../../model/selectors/getArticleError/getArticleError';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import styles from './ArticleDetails.module.scss';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCode } from '../ArticleCode/ArticleCode';
import { ArticleText } from '../ArticleText/ArticleText';
import { ArticleImage } from '../ArticleImage/ArticleImage';

interface ArticleProps {
  id: string;
  className?: string;
}

const reducers: ReducersList = {
  article: articleReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleProps) => {
  useDynamicReducerLoader({ reducers });

  const { t } = useTranslation(['translation', 'articleDetails']);
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleLoading);
  const article = useSelector(getArticleData);
  const error = useSelector(getArticleError);

  // TODO
  // useEffect(() => {
  //   if (__PROJECT__ !== 'storybook') {
  //     dispatch(fetchArticleById(id));
  //   }
  // }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCode key={block.id} className={styles.block} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImage key={block.id} className={styles.block} block={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleText key={block.id} className={styles.block} block={block} />;
      default:
        return null;
    }
  }, []);

  if (isLoading) {
    return (
      <>
        <Skeleton className={styles.avatar} width={200} height={200} borderRadius='50%' />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width='100%' height={200} />
        <Skeleton className={styles.skeleton} width='100%' height={200} />
      </>
    );
  }

  if (error) {
    return (
      <Text variant={TextType.ERROR} align={TextAlign.CENTER}>
        {t('ERROR_MESSAGE')}
      </Text>
    );
  }

  return (
    <div className={classNames(styles.ArticleDetails, [className])}>
      <AppLink className={styles.backLink} to={RoutePath.ARTICLES}>
        {t('BUTTON.BACK_TO_LIST', { ns: 'articleDetails' })}
      </AppLink>
      <Avatar
        size={200}
        src={article?.img}
        className={styles.avatar}
      />

      <div className={styles.title}>
        <Text size={TextSize.LG}>{article?.title}</Text>
        <Text size={TextSize.MD}>{article?.subtitle}</Text>
      </div>

      <div className={styles.articleInfoWrapper}>
        <div className={styles.articleInfo}>
          <EyeIcon className={styles.icon} />
          <Text size={TextSize.SM}>{article?.views}</Text>
        </div>
        <div className={styles.articleInfo}>
          <CalendarIcon className={styles.icon} />
          <Text size={TextSize.SM}>{article?.createdAt}</Text>
        </div>
      </div>

      {article?.blocks?.map(renderBlock)}
    </div>
  );
});
