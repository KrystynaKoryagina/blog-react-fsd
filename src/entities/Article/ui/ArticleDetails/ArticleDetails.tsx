import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton';
import { ReducersList } from 'app/providers/store';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import {
  Text, TextAlign, TextSize, TextType,
} from 'shared/ui/Text';
import { Avatar } from 'shared/ui/Avatar';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { HStack, VStack } from 'shared/ui/Stack';
import { articleReducer } from '../../model/slice/articleSlice';
import { getArticleLoading }
  from '../../model/selectors/getArticleLoading/getArticleLoading';
import { getArticleData }
  from '../../model/selectors/getArticleData/getArticleData';
import { getArticleError }
  from '../../model/selectors/getArticleError/getArticleError';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/article';
import { ArticleCode } from '../ArticleCode/ArticleCode';
import { ArticleText } from '../ArticleText/ArticleText';
import { ArticleImage } from '../ArticleImage/ArticleImage';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

interface ArticleProps {
  id?: string;
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
        return <ArticleCode key={block.id} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImage key={block.id} block={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleText key={block.id} block={block} />;
      default:
        return null;
    }
  }, []);

  if (isLoading) {
    return (
      <>
        <HStack justify='center'>
          <Skeleton width={200} height={200} borderRadius='50%' />
        </HStack>
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={20} />
        <Skeleton width='100%' height={200} />
        <Skeleton width='100%' height={200} />
        <Skeleton width='100%' height={200} />
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
    <VStack gap='24' className={className}>
      <HStack justify='center'>
        <Avatar size={200} src={article?.img} />
      </HStack>

      <VStack gap='8'>
        <Text as='h1' size={TextSize.LG}>{article?.title}</Text>
        <Text size={TextSize.MD}>{article?.subtitle}</Text>
      </VStack>

      <VStack gap='4'>
        <HStack align='center' gap='4'>
          <EyeIcon />
          <Text size={TextSize.SM}>{article?.views}</Text>
        </HStack>
        <HStack align='center' gap='4'>
          <CalendarIcon />
          <Text size={TextSize.SM}>{article?.createdAt}</Text>
        </HStack>
      </VStack>

      {article?.blocks?.map(renderBlock)}
    </VStack>
  );
});
