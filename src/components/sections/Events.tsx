import { barlow, bebas, lora } from '@/assets/font';
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import imgPort1 from '@/assets/img/portada-1.jpg';

export const Events = () => {
  return (
    <Flex
      as={'section'}
      aria-label="Informacion de los proximos eventos"
      mx={'auto'}
      justifyContent={'center'}
      alignItems={'center'}
      py={{ base: '80px', md: '120px' }}
      maxW={'1280px'}
      w={'100%'}
      textAlign={'center'}
      direction={'column'}
    >
      <Box px={4} maxW={'700px'} w={'100%'} pb={'60px'}>
        <Heading
          fontFamily={bebas.style.fontFamily}
          fontSize={{ base: '70px', md: '100px', xl: '150px' }}
          lineHeight={{ base: '60px', xl: '130px' }}
        >
          Proximos Eventos
        </Heading>
        <Text
          mt={'60px'}
          fontFamily={lora.style.fontFamily}
          fontSize={{ base: '16px', md: '17px', xl: '18px' }}
        >
          ¡Manténgase al tanto de lo que sucede en la Iglesia Comunitaria! Desde
          noches de adoración y estudios bíblicos hasta programas de alcance
          comunitario y reuniones de confraternidad, siempre hay algo para
          todos.
        </Text>
      </Box>
      <Stack mx={4} gap={8}>
        <Flex
          borderWidth={'1px'}
          rounded={'30px'}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={'center'}
          gap={10}
          p={{ base: 8, lg: 10 }}
        >
          <Image
            src={imgPort1}
            alt="imagen de actividad"
            style={{
              borderRadius: '50%',
              width: '190px',
              height: '190px',
              objectFit: 'cover',
            }}
          />
          <Flex
            alignItems={{ base: 'center', md: 'start' }}
            textAlign={{ base: 'center', md: 'left' }}
            flexDirection={{ base: 'column' }}
            gap={{ base: 4, md: 6 }}
          >
            <Heading
              as={'h3'}
              fontSize={{ base: '18px', md: '20px' }}
              fontFamily={barlow.style.fontFamily}
            >
              Escuela Edi
            </Heading>
            <Text
              fontFamily={lora.style.fontFamily}
              fontSize={{ base: '16px', md: '17px' }}
            >
              ¡Profundiza en la Palabra de Dios con nosotros! Únete a nuestro
              estudio bíblico semanal para conversaciones significativas y
              crecimiento espiritual.
            </Text>
            <Text
              fontFamily={barlow.style.fontFamily}
              fontSize={{ base: '11px', md: '12px' }}
              fontWeight={'bold'}
              textTransform={'uppercase'}
              letterSpacing={'1px'}
            >
              Lunes, Miercoles, Viernes 18:00 hs - 21: 00 hs
            </Text>
            <Box>
              <Button
                rounded={'none'}
                variant={'outline'}
                fontFamily={barlow.style.fontFamily}
                fontWeight={700}
                textTransform={'uppercase'}
                fontSize={{ base: '16px', md: '18px' }}
              >
                Más detalles
              </Button>
            </Box>
          </Flex>
        </Flex>
        <Flex
          borderWidth={'1px'}
          rounded={'30px'}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={'center'}
          gap={10}
          p={{ base: 8, lg: 10 }}
        >
          <Image
            src={imgPort1}
            alt="imagen de actividad"
            style={{
              borderRadius: '50%',
              width: '190px',
              height: '190px',
              objectFit: 'cover',
            }}
          />
          <Flex
            alignItems={{ base: 'center', md: 'start' }}
            textAlign={{ base: 'center', md: 'left' }}
            flexDirection={{ base: 'column' }}
            gap={{ base: 4, md: 6 }}
          >
            <Heading
              as={'h3'}
              fontSize={{ base: '18px', md: '20px' }}
              fontFamily={barlow.style.fontFamily}
            >
              Escuela Edi
            </Heading>
            <Text
              fontFamily={lora.style.fontFamily}
              fontSize={{ base: '16px', md: '17px' }}
            >
              ¡Profundiza en la Palabra de Dios con nosotros! Únete a nuestro
              estudio bíblico semanal para conversaciones significativas y
              crecimiento espiritual.
            </Text>
            <Text
              fontFamily={barlow.style.fontFamily}
              fontSize={{ base: '11px', md: '12px' }}
              fontWeight={'bold'}
              textTransform={'uppercase'}
              letterSpacing={'1px'}
            >
              Lunes, Miercoles, Viernes 18:00 hs - 21: 00 hs
            </Text>
            <Box>
              <Button
                rounded={'none'}
                variant={'outline'}
                fontFamily={barlow.style.fontFamily}
                fontWeight={700}
                textTransform={'uppercase'}
                fontSize={{ base: '16px', md: '18px' }}
              >
                Más detalles
              </Button>
            </Box>
          </Flex>
        </Flex>
        <Flex
          borderWidth={'1px'}
          rounded={'30px'}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={'center'}
          gap={10}
          p={{ base: 8, lg: 10 }}
        >
          <Image
            src={imgPort1}
            alt="imagen de actividad"
            style={{
              borderRadius: '50%',
              width: '190px',
              height: '190px',
              objectFit: 'cover',
            }}
          />
          <Flex
            alignItems={{ base: 'center', md: 'start' }}
            textAlign={{ base: 'center', md: 'left' }}
            flexDirection={{ base: 'column' }}
            gap={{ base: 4, md: 6 }}
          >
            <Heading
              as={'h3'}
              fontSize={{ base: '18px', md: '20px' }}
              fontFamily={barlow.style.fontFamily}
            >
              Escuela Edi
            </Heading>
            <Text
              fontFamily={lora.style.fontFamily}
              fontSize={{ base: '16px', md: '17px' }}
            >
              ¡Profundiza en la Palabra de Dios con nosotros! Únete a nuestro
              estudio bíblico semanal para conversaciones significativas y
              crecimiento espiritual.
            </Text>
            <Text
              fontFamily={barlow.style.fontFamily}
              fontSize={{ base: '11px', md: '12px' }}
              fontWeight={'bold'}
              textTransform={'uppercase'}
              letterSpacing={'1px'}
            >
              Lunes, Miercoles, Viernes 18:00 hs - 21: 00 hs
            </Text>
            <Box>
              <Button
                rounded={'none'}
                variant={'outline'}
                fontFamily={barlow.style.fontFamily}
                fontWeight={700}
                textTransform={'uppercase'}
                fontSize={{ base: '16px', md: '18px' }}
              >
                Más detalles
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Stack>
      <Box pt={10}>
        <Button
          rounded={'none'}
          colorPalette={'orange'}
          fontFamily={barlow.style.fontFamily}
          fontWeight={700}
          textTransform={'uppercase'}
          size={{ base: 'lg', md: 'xl', lg: '2xl' }}
          fontSize={{ base: '16px', md: '18px', xl: '20px' }}
          _hover={{
            bg: 'white',
            color: 'black',
            borderWidth: '1px',
            borderColor: 'gray',
          }}
        >
          Ver todos los eventos
        </Button>
      </Box>
    </Flex>
  );
};
