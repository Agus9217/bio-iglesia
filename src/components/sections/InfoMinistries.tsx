import { Button, Flex, Heading } from '@chakra-ui/react';
import { Carousel } from '../carousel/Carousel';
import { barlow, bebas } from '@/assets/font';
import { ministriesImages } from '@/assets/img/ministerios';

export const InfoMinistries = () => {
  return (
    <Flex
      as={'section'}
      aria-label="Informacion de los ministerios"
      bg={'black'}
      mx={'auto'}
      justifyContent={'center'}
      alignItems={'center'}
      py={{ base: '80px', md: '120px' }}
      textAlign={'center'}
      direction={'column'}
    >
      <Heading
        as={'h2'}
        color={'white'}
        fontSize={'56px'}
        lineHeight={'50px'}
        fontFamily={bebas.style.fontFamily}
        textTransform={'uppercase'}
        pb={'80px'}
      >
        Nuestros ministerios
      </Heading>
      <Carousel images={ministriesImages} />
      <Flex pt={'70px'}>
        <Button
          colorPalette={'orange'}
          rounded={'none'}
          _hover={{
            color: 'black',
            bg: 'white',
          }}
          textTransform={'uppercase'}
          fontWeight={600}
          fontFamily={barlow.style.fontFamily}
          fontSize={{ base: '16px', md: '18px', xl: '20px' }}
          size={{ base: 'xl', xl: '2xl' }}
        >
          Todos los ministerios
        </Button>
      </Flex>
    </Flex>
  );
};
