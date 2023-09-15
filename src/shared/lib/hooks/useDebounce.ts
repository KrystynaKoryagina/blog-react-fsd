import { useCallback, useEffect, useRef } from 'react';

export const useDebounce = (cb: (...args: any[]) => void, delay: number = 500) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  return useCallback((...args: any[]) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      cb(...args);
    }, delay);
  }, [cb, delay]);
};
