'use client';

import { Heading, HeadingProps } from '@chakra-ui/react';
import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type CombinedProps = HeadingProps & MotionProps;

interface AnimatedHeadingProps extends CombinedProps {
  children: ReactNode;
}

const MotionHeading = motion.create(Heading);

export const AnimatedHeading = ({
  children,
  ...props
}: AnimatedHeadingProps) => {
  return <MotionHeading {...props}>{children}</MotionHeading>;
};
