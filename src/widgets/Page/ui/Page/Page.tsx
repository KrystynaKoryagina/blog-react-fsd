import { ReactNode, useRef, UIEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/utils/classNames';
import {
  getPageScrollPosition,
  scrollActions,
} from '@/features/SaveScrollPosition';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import { StoreSchema } from '@/app/providers/store';
import styles from './Page.module.scss';
import { TestProps } from '@/shared/types/testProps';

interface PageProps extends TestProps {
  children: ReactNode;
  className?: string;
  saveScroll?: boolean;
  onScrollEnd?: () => void;
}

export const Page = ({
  children,
  className,
  saveScroll = false,
  onScrollEnd,
  ...test
}: PageProps) => {
  const wrapperRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  // TODO fix scroll position on Articles page. Sometimes it's saved with wrong position
  const scrollPosition = useSelector((state: StoreSchema) =>
    getPageScrollPosition(state, pathname),
  );

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  // TODO useInitialEffect
  useEffect(() => {
    if (wrapperRef.current && saveScroll) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition, saveScroll]);

  const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
    if (saveScroll) {
      dispatch(
        scrollActions.setScrollPosition({
          path: pathname,
          position: e.currentTarget.scrollTop,
        }),
      );
    }
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={classNames(styles.Page, [className])}
      onScroll={onScroll}
      data-testid={test['data-testid']}
    >
      {children}
      {onScrollEnd && <div ref={triggerRef} className={styles.trigger} />}
    </main>
  );
};
