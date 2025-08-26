import { barlow, bebas, lora } from '@/assets/font';
import { Hero } from '@/components';
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import portadaImg from '@/assets/img/portada-4.jpg';
import Image from 'next/image';
import { Carousel } from '@/components/carousel/Carousel';
import imgPort1 from '@/assets/img/portada-1.jpg';

export default function Home() {
  return (
    <>
      <Hero />
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
            tres aspectos esenciales. Amar a Dios como respuesta de que el nos
            amó primero, amarnos entre nosotros como un mandamiento nuevo y amar
            al mundo como misión y voluntad de Cristo.
          </Text>
        </Flex>
      </Flex>
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
            crecimiento natural dado por Dios y el servicio al prójimo. Creemos
            en crear un espacio donde las personas puedan encontrar a Dios con
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
        <Carousel />
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
            ¡Manténgase al tanto de lo que sucede en la Iglesia Comunitaria!
            Desde noches de adoración y estudios bíblicos hasta programas de
            alcance comunitario y reuniones de confraternidad, siempre hay algo
            para todos.
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
      </Flex>
    </>
  );
}
