'use client';

import { Flex, FlexProps } from '@chakra-ui/react';
import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type CombinedProps = FlexProps & MotionProps;

interface AnimatedHeadingProps extends CombinedProps {
  children: ReactNode;
}

const MotionFlex = motion(Flex);

export const AnimatedFlex = ({ children, ...props }: AnimatedHeadingProps) => {
  return <MotionFlex {...props}>{children}</MotionFlex>;
};
