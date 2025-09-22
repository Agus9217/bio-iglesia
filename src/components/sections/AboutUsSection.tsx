import portadaImg from '@/assets/img/portada-4.jpg';
import { barlow, bebas, lora } from '@/assets/font';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const AboutUsSection = () => {
  return (
    <Flex
      as={'section'}
      aria-label="Seccion de informacion acerca de nosotros"
      direction={{ base: 'column', xl: 'row' }}
      py={{ base: '80px', md: '120px' }}
      px={'20px'}
      maxW={'1280px'}
      w={'100%'}
      mx={'auto'}
    >
      <Flex
        justifyContent={'center'}
        order={{ base: 1, xl: 2 }}
        flexGrow={1}
        direction={'column'}
        gap={{ base: '40px', xl: '70px' }}
        w={'full'}
        p={{ base: 0, xl: '40px' }}
      >
        <Box>
          <Text
            as={'span'}
            fontFamily={barlow.style.fontFamily}
            fontWeight={600}
            fontSize={{ xl: '18px' }}
            textTransform={'uppercase'}
            bg={'black'}
            color={'white'}
            px={3}
            py={2}
            letterSpacing={'2px'}
          >
            Quienes somos
          </Text>
        </Box>
        <Heading
          as={'h3'}
          fontFamily={bebas.style.fontFamily}
          fontSize={{ base: '40px', md: '52px', xl: '74px' }}
          lineHeight={{ base: '40px', md: '50px', xl: '70px' }}
        >
          Iglesia centrada en la adoración a Cristo y el crecimiento
        </Heading>
        <Text
          fontSize={{ md: '17px', xl: '18px' }}
          fontFamily={lora.style.fontFamily}
        >
          Bioiglesia, esta centrada en Cristo, dedicada a la adoración, el
          crecimiento natural dado por Dios y el servicio al prójimo. Creemos en
          crear un espacio donde las personas puedan encontrar a Dios con
          autenticidad, profundizar su fe y forjar relaciones afectivas.
        </Text>
        <Box>
          <Button
            colorPalette={'orange'}
            rounded={'none'}
            textTransform={'uppercase'}
            fontWeight={600}
            fontFamily={barlow.style.fontFamily}
            fontSize={{ base: '16px', md: '18px', xl: '20px' }}
            size={{ base: 'xl', xl: '2xl' }}
          >
            Conocenos más
          </Button>
        </Box>
      </Flex>
      <Flex
        order={{ base: 2, xl: 1 }}
        flexGrow={1}
        w={'full'}
        h={{ base: '500px', md: 'auto' }}
        px={{ base: '10px', xl: '40px' }}
        py={{ base: '40px', xl: 0 }}
      >
        <Image
          src={portadaImg}
          alt="Imagen sobre la cruz que esta en la iglesia"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Flex>
    </Flex>
  );
};
