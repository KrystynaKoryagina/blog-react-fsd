import { ReducersList } from 'app/providers/store';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArticlesInfiniteList, articlesListReducer, fetchNextArticles, initArticlesPage,
} from 'widgets/ArticlesInfiniteList';
import { useSearchParams } from 'react-router-dom';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';

const reducers: ReducersList = {
  articlesList: articlesListReducer,
};

const ArticlesPage = () => {
  useDynamicReducerLoader({ reducers, removeAfterUnmount: false });

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  // TODO
  // useInitialEffect

  // TODO move to hook
  // useEffect(() => {
  //   if (__PROJECT__ !== 'storybook') {
  //     dispatch(fetchCommentsByArticleId(articleId));
  //   }
  // }, [dispatch, id]);

  useEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, [dispatch, searchParams]);

  const onLoadMoreArticles = useCallback(() => {
    dispatch(fetchNextArticles());
  }, [dispatch]);

  return (
    <Page onScrollEnd={onLoadMoreArticles} saveScroll>
      <VStack gap='32'>
        <ArticlesPageFilter />
        <ArticlesInfiniteList />
      </VStack>
    </Page>
  );
};

export default memo(ArticlesPage);

// TODO
// Вадим Грацилёв • Вс 13 Ноя 2022
// Если при плиточном отображении на экран поместились все карточки статей из лимита, то onLoadNextPart не вызовется и статьи не подгрузятся, т.к. скролла нет.
// Станислав Шабалин
// Тут надо при инициализации проверку делать на отсутствие скрола (то есть наличие конца страницы) и делать вызов onLoadNextPart пока hasMore истина. Как-то так думаю
// Вт 15 Ноя 2022 Нравится • Подписаться

// Юлия Старченко
// Можно в Page передавать onScrollEnd только, когда не isLoading. Не знаю, хорошо ли это, но решение рабочее.
