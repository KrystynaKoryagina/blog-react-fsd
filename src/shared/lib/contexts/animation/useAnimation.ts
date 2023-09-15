import { useContext } from 'react';
import { AnimationContextProps } from './types/animation';
import { AnimationContext } from './AnimationContext';

export const useAnimation = (): Required<AnimationContextProps> => useContext(
  AnimationContext,
) as Required<AnimationContextProps>;
