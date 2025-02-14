import { FlexProps } from '@/shared/types/flex';
import { Flex } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => (
  <Flex direction="row" {...props} />
);
