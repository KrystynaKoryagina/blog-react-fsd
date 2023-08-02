import { useCallback, useMemo, useState } from 'react';

interface HoverBind {
  onMouseEnter: VoidFunction;
  onMouseLeave: VoidFunction;
}

type UseHoverResult = [boolean, HoverBind];

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(() => [
    isHover,
    {
      onMouseEnter,
      onMouseLeave,
    },
  ], [isHover, onMouseEnter, onMouseLeave]);
};
