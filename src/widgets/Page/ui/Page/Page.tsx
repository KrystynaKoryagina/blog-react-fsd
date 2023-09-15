import {
  ReactNode, useRef, UIEvent, useEffect,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/utils/classNames';
import { getPageScrollPosition, scrollActions } from '@/features/SaveScrollPosition';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import { useSelector } from 'react-redux';
import { StoreSchema } from '@/app/providers/store';
import styles from './Page.module.scss';

interface PageProps {
  children: ReactNode;
  className?: string;
  saveScroll?: boolean
  onScrollEnd?: () => void
}

export const Page = ({
  children,
  className,
  saveScroll = false,
  onScrollEnd,
}: PageProps) => {
  const wrapperRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  const scrollPosition = useSelector((state: StoreSchema) => getPageScrollPosition(state, pathname));

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
      dispatch(scrollActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      }));
    }
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={classNames(styles.Page, [className])}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd && <div ref={triggerRef} className={styles.trigger} />}
    </main>
  );
};
