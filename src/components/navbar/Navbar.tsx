'use client';

import { Flex, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import logoImg from '@/assets/img/logobioiglesia.png';
import { NavDesktop } from './NavDesktop';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';
import { NavMobile } from './NavMobile';
import { Socials } from '../socials/Socials';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 30);
  });

  return (
    <Stack
      position={'fixed'}
      w={'full'}
      as={'header'}
      minH={'80px'}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'center'}
      px={{ base: 2, md: 4 }}
      textTransform={'uppercase'}
      zIndex={1000}
      bg={isScrolled ? 'black' : 'transparent'}
      transition={'background 0.2s ease-in-out'}
    >
      <Stack
        as={'nav'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={{ base: 'space-between', lg: 'start' }}
        w={{ base: '1280px', '2xl': '1920px' }}
        color={'white'}
      >
        <Flex mr={4}>
          <Image
            src={logoImg}
            width={100}
            height={100}
            alt={'Logo de la iglesia de barrio nuevo'}
          />
        </Flex>
        <NavDesktop />
        <Socials />
        <NavMobile />
      </Stack>
    </Stack>
  );
};
