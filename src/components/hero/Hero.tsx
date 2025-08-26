import { barlow, bebas, lora } from '@/assets/font';
import { AspectRatio, Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { AnimatedFlex, AnimatedHeading } from '../motion-components';

export const Hero = () => {
  const aspectRatios = {
    base: 600 / 900,
    md: 1200 / 800,
    lg: 1920 / 1080,
    xl: 2560 / 1440,
  };

  return (
    <Box
      as={'section'}
      aria-label="Seccion del hero con descripcion de la iglesia"
      position={'relative'}
    >
      <AspectRatio
        ratio={[
          aspectRatios.base,
          aspectRatios.base,
          aspectRatios.md,
          aspectRatios.lg,
          aspectRatios.xl,
        ]}
        w="100vw"
        maxW="100%"
      >
        <Box
          as="picture"
          display="block"
          w="full"
          h="full"
          filter={'brightness(40%)'}
        >
          {/* Móvil */}
          <source
            media="(max-width: 640px)"
            srcSet={`
            /hero-iglesia-mobile-640.webp 640w,
            /hero-iglesia-mobile-900.webp 900w
          `}
          />

          {/* Tablet */}
          <source
            media="(max-width: 1280px)"
            srcSet={`
            /hero-iglesia-tablet-1024.webp 1024w,
            /hero-iglesia-tablet-1280.webp 1280w
          `}
          />

          {/* Desktop */}
          <source
            media="(max-width: 1920px)"
            srcSet={`
            /hero-iglesia-desktop-1920.webp 1920w,
            /hero-iglesia-desktop-2560.webp 2560w
          `}
          />

          {/* 4K/Ultra HD - Tamaño 2560x1440 */}
          <Image
            src="/hero-iglesia-ultra-3440.webp"
            alt="Imagen hero responsiva de la iglesia"
            fill
            priority
            quality={90}
            sizes="(max-width: 640px) 100vw, 
                 (max-width: 1024px) 100vw, 
                 (max-width: 1920px) 100vw, 
                 100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
        </Box>
      </AspectRatio>
      <Flex
        position={'absolute'}
        direction={'column'}
        top={{ base: '50%', md: '60%' }}
        left={{ base: '50%', md: 0, '2xl': '15%' }}
        transform={{ base: 'translate(-50%, -50%)', md: 'translate(0%, -50%)' }}
        color={'white'}
        textTransform={'uppercase'}
        textAlign={{ base: 'center', md: 'left' }}
        maxW={{ base: '500px', lg: '800px', xl: '1300px' }}
        w={'full'}
        px={{ md: 4 }}
        gap={{ base: 4, md: 8, lg: '55px', xl: '95px' }}
      >
        <AnimatedHeading
          fontFamily={`${bebas.style.fontFamily}`}
          fontSize={{ base: '5xl', md: '7xl', lg: '100px', xl: '150px' }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          Bienvenido
        </AnimatedHeading>
        <AnimatedHeading
          fontFamily={`${bebas.style.fontFamily}`}
          fontSize={{ base: '5xl', md: '7xl', lg: '100px', xl: '150px' }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          a nuestra iglesia
        </AnimatedHeading>
        <AnimatedHeading
          fontFamily={bebas.style.fontFamily}
          color={'yellow.400'}
          fontSize={{ base: '5xl', md: '7xl', lg: '100px', xl: '150px' }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          tu iglesia
        </AnimatedHeading>
        <AnimatedHeading
          as={'h1'}
          fontFamily={`${barlow.style.fontFamily}`}
          fontSize={{ base: '22px', md: '28px', xl: '32px' }}
          fontWeight={600}
          textTransform={'none'}
          py={{ base: 6, md: 3, lg: 0 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          Bioiglesia - Iglesia Cristiana en Barrio Nuevo
        </AnimatedHeading>
        <AnimatedFlex
          justifyContent={{ base: 'center', md: 'left' }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <Button
            textTransform={'uppercase'}
            fontFamily={`${barlow.style.fontFamily}`}
            fontSize={{ base: '16x', md: '18px', xl: '20px' }}
            size={{ base: 'lg', xl: '2xl' }}
            fontWeight={600}
            colorPalette={'orange'}
            rounded={'none'}
            _hover={{
              color: 'black',
              bg: 'white',
            }}
          >
            Comunicate con nosotros
          </Button>
        </AnimatedFlex>
      </Flex>
      <AnimatedFlex
        position={'absolute'}
        display={{ base: 'none', md: 'flex' }}
        bottom={0}
        right={0}
        bg={'teal.700'}
        color={'white'}
        alignItems={'center'}
        justifyContent={'center'}
        textAlign={'center'}
        direction={'column'}
        textTransform={'uppercase'}
        pt={{ md: '40px', xl: '70px' }}
        pl={{ md: '70px', xl: '120px' }}
        pr={{ md: '30px' }}
        pb={{ md: '20px', xl: '30px' }}
        roundedTopLeft={{ md: '100px', xl: '250px' }}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <Text
          color={'black'}
          bg={'white'}
          fontFamily={barlow.style.fontFamily}
          fontSize={{ md: '14px', lg: '18px' }}
          fontWeight={800}
          letterSpacing={'2px'}
          px={2}
        >
          Honduras 2004 - 17:00 hs
        </Text>
        <Text
          fontFamily={bebas.style.fontFamily}
          fontSize={{ md: '56px', lg: '76px', xl: '100px' }}
        >
          Domingos
        </Text>
        <Text
          fontFamily={lora.style.fontFamily}
          textTransform={'none'}
          fontSize={{ md: '17px', xl: '18px' }}
        >
          Te esperamos, no faltes.
        </Text>
      </AnimatedFlex>
    </Box>
  );
};
