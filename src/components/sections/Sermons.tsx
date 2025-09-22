import { barlow, bebas, lora } from '@/assets/font';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import sermonImg from '@/assets/img/portada-1.jpg';

export const Sermons = () => {
  return (
    <Flex
      as={'section'}
      aria-label={'Predicas destacadas'}
      bg={'#404F40'}
      py={{ base: '80px', md: '120px' }}
      px={'20px'}
    >
      <Flex
        direction={'column'}
        gap={{ base: '40px', xl: '70px' }}
        w={'full'}
        maxW={'1280px'}
        p={{ base: 0, xl: '40px' }}
        color={'white'}
        mx={'auto'}
      >
        <Box>
          <Text
            as={'span'}
            fontFamily={barlow.style.fontFamily}
            fontWeight={600}
            fontSize={{ xl: '18px' }}
            textTransform={'uppercase'}
            bg={'white'}
            color={'black'}
            px={3}
            py={2}
            letterSpacing={'2px'}
          >
            Prédicas destacadas
          </Text>
        </Box>
        <Heading
          as={'h3'}
          fontFamily={bebas.style.fontFamily}
          fontSize={{ base: '40px', md: '52px', xl: '74px' }}
          lineHeight={{ base: '40px', md: '50px', xl: '70px' }}
        >
          Titulo de la predica
        </Heading>
        <Text
          fontSize={{ md: '17px', xl: '18px' }}
          fontFamily={lora.style.fontFamily}
        >
          Pequeña reseña de la pedrica
        </Text>
        <Image
          src={sermonImg}
          alt="Imagen descriptiva de la predica"
          style={{
            margin: 'auto',
            maxWidth: '720px',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            borderRadius: '20px',
          }}
        />

        <Box mx={'auto'}>
          <Button
            colorPalette={'orange'}
            rounded={'none'}
            textTransform={'uppercase'}
            fontWeight={600}
            fontFamily={barlow.style.fontFamily}
            fontSize={{ base: '16px', md: '18px', xl: '20px' }}
            size={{ base: 'xl', xl: '2xl' }}
            _hover={{
              bg: 'white',
              color: 'black',
            }}
          >
            Ver prédicas
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
