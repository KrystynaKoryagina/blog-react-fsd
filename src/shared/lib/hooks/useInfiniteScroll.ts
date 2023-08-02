import { RefObject, useEffect } from 'react';

interface InfiniteScrollProps {
  wrapperRef: RefObject<HTMLElement>
  triggerRef: RefObject<HTMLElement>
  callback?: () => void,
}

export const useInfiniteScroll = ({
  wrapperRef,
  triggerRef,
  callback,
}: InfiniteScrollProps) => {
  useEffect(() => {
    const target = triggerRef.current;
    const root = wrapperRef.current;

    let observer: IntersectionObserver | null = null;

    if (target && callback) {
      const options = {
        root,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(target);
    }

    return () => {
      if (observer && target) {
        observer.unobserve(target);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
