import { barlow, bebas, lora } from "@/assets/font";
import { Hero } from "@/components";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import portadaImg from "@/assets/img/portada-4.jpg";
import Image from "next/image";
import { Carousel } from "@/components/carousel/Carousel";

export default function Home() {
  return (
    <>
      <Hero />
      <Flex
        bg={"orange.50"}
        mx={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
        py={{ base: "80px", md: "120px" }}
        px={"20px"}
        textAlign={"center"}
      >
        <Flex maxW={{ xl: "700px" }} direction={"column"} gap={"40px"}>
          <Heading
            fontFamily={bebas.style.fontFamily}
            fontSize={{ base: "70px", md: "7xl", lg: "100px" }}
            lineHeight={{ base: "65px", md: "85px" }}
            px={2}
          >
            Bienvenido a Iglesia Cristiana de Barrio Nuevo
          </Heading>
          <Text
            fontSize={{ base: "17px", xl: "18px" }}
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
        direction={{ base: "column", xl: "row" }}
        py={{ base: "80px", md: "120px" }}
        px={"20px"}
        maxW={"1280px"}
        w={"100%"}
        mx={"auto"}
      >
        <Flex
          justifyContent={"center"}
          order={{ base: 1, xl: 2 }}
          flexGrow={1}
          direction={"column"}
          gap={{ base: "40px", xl: "70px" }}
          w={"full"}
          p={{ base: 0, xl: "40px" }}
        >
          <Box>
            <Text
              as={"span"}
              fontFamily={barlow.style.fontFamily}
              fontWeight={600}
              textTransform={"uppercase"}
              bg={"black"}
              color={"white"}
              px={3}
              py={2}
              letterSpacing={"2px"}
            >
              Quienes somos
            </Text>
          </Box>
          <Heading
            as={"h3"}
            fontFamily={bebas.style.fontFamily}
            fontSize={{ base: "40px", md: "52px", xl: "74px" }}
            lineHeight={{ base: "40px", md: "50px", xl: "70px" }}
          >
            Iglesia centrada en la adoración a Cristo y el crecimiento
          </Heading>
          <Text
            fontSize={{ md: "17px", xl: "18px" }}
            fontFamily={lora.style.fontFamily}
          >
            La Iglesia Cristiana de Barrio Nuevo, esta centrada en Cristo,
            dedicada a la adoración, el crecimiento natural dado por Dios y el
            servicio al prójimo. Creemos en crear un espacio donde las personas
            puedan encontrar a Dios con autenticidad, profundizar su fe y forjar
            relaciones afectivas.
          </Text>
          <Box>
            <Button
              colorPalette={"orange"}
              rounded={"none"}
              textTransform={"uppercase"}
              fontWeight={600}
              fontFamily={barlow.style.fontFamily}
              fontSize={{ base: "16px", md: "18px", xl: "20px" }}
              size={{ base: "xl", xl: "2xl" }}
            >
              Conocenos más
            </Button>
          </Box>
        </Flex>
        <Flex
          order={{ base: 2, xl: 1 }}
          flexGrow={1}
          w={"full"}
          h={{ base: "500px", md: "auto" }}
          px={{ base: "10px", xl: "40px" }}
          py={{ base: "40px", xl: 0 }}
        >
          <Image
            src={portadaImg}
            alt="Imagen sobre la cruz que esta en la iglesia"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Flex>
      </Flex>
      <Flex
        bg={"black"}
        mx={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
        py={{ base: "80px", md: "120px" }}
        textAlign={"center"}
        direction={"column"}
      >
        <Heading
          color={"white"}
          fontSize={"56px"}
          lineHeight={"50px"}
          fontFamily={bebas.style.fontFamily}
          textTransform={"uppercase"}
          pb={"80px"}
        >
          Nuestros ministerios
        </Heading>
        <Carousel />
      </Flex>
    </>
  );
}
