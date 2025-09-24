'use client';

import { Flex } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';

export const Socials = () => {
  return (
    <Flex w={'full'} justifyContent={'flex-end'} color={'white'} gap={4}>
      <Link
        href={'https://www.facebook.com/profile.php?id=100086545342176'}
        target="_blank"
      >
        <FaFacebookF size={'20px'} />
      </Link>
      <Link href={'https://www.instagram.com/bio_iglesia/'} target="_blank">
        <FaInstagram size={'20px'} />
      </Link>
    </Flex>
  );
};
