import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { AnimationContext } from './AnimationContext';
import {
  AnimationContextProps,
  GestureType,
  SpringType,
} from './types/animation';

interface AnimationProviderProps {
  children?: ReactNode;
}

const getAsyncAnimationModules = async () =>
  Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);

const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const springRef = useRef<SpringType>();
  const gestureRef = useRef<GestureType>();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      springRef.current = Spring;
      gestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const animationProps = useMemo<AnimationContextProps>(
    () => ({
      Spring: springRef.current,
      Gesture: gestureRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return (
    <AnimationContext.Provider value={animationProps}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
