'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Box, Flex } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  images: StaticImageData[];
  altText?: string;
}

export const Carousel = ({
  images,
  altText = 'Logo del ministerio',
}: Props) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    centerPadding: '290px',
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '195px',
        },
      },
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '195px',
        },
      },
      {
        breakpoint: 1446,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '95px',
        },
      },
    ],
  };

  return (
    <Box w={'100%'} overflowX={'hidden'}>
      <Slider {...settings}>
        {images.map((item, index) => (
          <Flex key={index} p={2}>
            <Box
              maxW={'626px'}
              w={'100%'}
              h={{ base: '380px', md: '420px', xl: '560px' }}
              mx={'auto'}
            >
              <Image
                src={item}
                alt={altText}
                style={{
                  borderRadius: '20px',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};
