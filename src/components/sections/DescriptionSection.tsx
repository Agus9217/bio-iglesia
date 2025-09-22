import { bebas, lora } from '@/assets/font';
import { Flex, Heading, Text } from '@chakra-ui/react';

export const DescriptionSection = () => {
  return (
    <Flex
      as={'section'}
      aria-label="Descripcion y proposito de la iglesia"
      bg={'orange.50'}
      mx={'auto'}
      justifyContent={'center'}
      alignItems={'center'}
      py={{ base: '80px', md: '120px' }}
      px={'20px'}
      textAlign={'center'}
    >
      <Flex maxW={{ xl: '700px' }} direction={'column'} gap={'40px'}>
        <Heading
          as={'h2'}
          fontFamily={bebas.style.fontFamily}
          fontSize={{ base: '70px', md: '7xl', lg: '100px' }}
          lineHeight={{ base: '65px', md: '85px' }}
          px={2}
        >
          Bienvenido a Bioiglesia
        </Heading>
        <Text
          fontSize={{ base: '17px', xl: '18px' }}
          fontFamily={lora.style.fontFamily}
          fontWeight={400}
        >
          El propósito de nuestra iglesia es alcanzar un equilibrio radical en
          tres aspectos esenciales. Amar a Dios como respuesta de que el nos amó
          primero, amarnos entre nosotros como un mandamiento nuevo y amar al
          mundo como misión y voluntad de Cristo.
        </Text>
      </Flex>
    </Flex>
  );
};
