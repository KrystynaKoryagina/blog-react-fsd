import { Flex } from '../Flex/Flex';
import { FlexProps } from '../../types/stack';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => (
  <Flex direction='column' {...props} />
);
