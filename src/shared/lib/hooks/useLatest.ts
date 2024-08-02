import { useLayoutEffect, useRef } from 'react';

// TODO послушать когда использовать
export const useLatest = <T>(value: T) => {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
};
