import { Flex } from '../Flex/Flex';
import { FlexProps } from '../../types/stack';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => (
  <Flex direction='row' {...props} />
);
