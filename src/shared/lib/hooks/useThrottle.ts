import { useCallback, useEffect, useRef } from 'react';

export const useThrottle = (cb: (...args: any[]) => void, delay: number) => {
  const throttleRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  return useCallback((...args) => {
    if (throttleRef.current) {
      return;
    }

    cb(...args);
    throttleRef.current = true;

    timerRef.current = setTimeout(() => {
      throttleRef.current = false;
    }, delay);
  }, [cb, delay]);
};
