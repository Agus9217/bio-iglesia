import { barlow, lora } from '@/assets/font';
import {
  Button,
  Field,
  Flex,
  Heading,
  Input,
  List,
  Text,
} from '@chakra-ui/react';
import { FaPhone } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';
import { navItems } from '../navbar/nav-items';
import { Socials } from '../socials/Socials';
import Image from 'next/image';

export const Footer = () => {
  return (
    <Flex
      bg={'black'}
      color={'white'}
      py={{ base: '80px', md: '120px' }}
      px={8}
      justifyContent={'center'}
      alignItems={'center'}
      flexDir={'column'}
      gap={'100px'}
    >
      <Flex
        maxW={'1280px'}
        w={'full'}
        alignItems={'center'}
        flexDir={{ base: 'column', xl: 'row' }}
        textAlign={{ base: 'center', md: 'start' }}
        gap={8}
      >
        <Flex
          alignItems={{ base: 'center', md: 'start' }}
          flexDir={'column'}
          gap={6}
          width={'full'}
        >
          <Heading
            fontFamily={barlow.style.fontFamily}
            as={'h2'}
            fontSize={{ base: '22px', md: '28px', xl: '32px' }}
          >
            Estemos conectados
          </Heading>
          <Text fontSize={{ base: 'md' }} fontFamily={lora.style.fontFamily}>
            Recibe actualizaciones sobre eventos e inspiracíon
          </Text>
          <Field.Root>
            <Input rounded={'none'} placeholder="Correo electrónico" />
            <Button
              w={'full'}
              colorPalette={'yellow'}
              textTransform={'uppercase'}
              rounded={'none'}
              fontWeight={'bold'}
              fontFamily={barlow.style.fontFamily}
              fontSize={{ base: 'md' }}
              _hover={{ color: 'white', bg: 'orange' }}
            >
              suscribir
            </Button>
          </Field.Root>
        </Flex>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          gap={6}
          w={'full'}
          justifyContent={'space-between'}
        >
          <Flex
            flexDir={{ base: 'column' }}
            gap={4}
            alignItems={{ base: 'center', md: 'start' }}
          >
            <Heading fontFamily={barlow.style.fontFamily}>
              Links de interes
            </Heading>
            <List.Root>
              {navItems.map((item) => (
                <List.Item
                  key={item.label}
                  listStyle={'none'}
                  fontFamily={lora.style.fontFamily}
                >
                  {item.label}
                </List.Item>
              ))}
            </List.Root>
          </Flex>
          <Flex flexDir={{ base: 'column' }} gap={4}>
            <Heading fontFamily={barlow.style.fontFamily}>Dirección</Heading>
            <Text fontFamily={lora.style.fontFamily}>
              Honduras 2010, Libertad, Merlo
            </Text>
          </Flex>
          <Flex
            flexDir={{ base: 'column' }}
            gap={4}
            alignItems={{ base: 'center', md: 'start' }}
            fontFamily={lora.style.fontFamily}
          >
            <Heading fontFamily={barlow.style.fontFamily}>Contacto</Heading>
            <Flex alignItems={'center'} gap={2} justifyContent={'center'}>
              <FaPhone />
              <Text>11-22334455</Text>
            </Flex>
            <Flex alignItems={'center'} gap={2} justifyContent={'center'}>
              <IoMailSharp />
              <Text>mail@bioiglesia.com</Text>
            </Flex>
            <Flex alignItems={'center'} justifyContent={'center'}>
              <Socials />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent={'center'} alignItems={'center'} gap={4}>
        <Image
          src={'/logobioiglesia.png'}
          alt="Logo de la iglesia"
          width={100}
          height={100}
        />
        <Heading fontFamily={barlow.style.fontFamily} fontSize={'2xl'}>
          Bioiglesia - Iglesia Cristiana Evangélica en Barrio Nuevo
        </Heading>
      </Flex>
    </Flex>
  );
};
