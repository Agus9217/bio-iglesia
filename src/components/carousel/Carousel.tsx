"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Flex } from "@chakra-ui/react";
import maaocImg from "@/assets/img/ministerios/maaoc.png";
import ediImg from "@/assets/img/ministerios/escuela-edi.png";
import extremadosImg from "@/assets/img/ministerios/extremados.png";
import mayordomiaImg from "@/assets/img/ministerios/mayordomia.png";
import intercesionImg from "@/assets/img/ministerios/intercesion.png";
import piedraImg from "@/assets/img/ministerios/piedra-angular.png";
import estimulosImg from "@/assets/img/ministerios/estimulos-espirituales.png";
import gruposImg from "@/assets/img/ministerios/grupos-la-red.png";
import Image from "next/image";

export const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    centerPadding: "290px",
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "195px",
        },
      },
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "195px",
        },
      },
      {
        breakpoint: 1446,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "95px",
        },
      },
    ],
  };

  const boxes = [
    maaocImg,
    extremadosImg,
    ediImg,
    piedraImg,
    estimulosImg,
    intercesionImg,
    mayordomiaImg,
    gruposImg,
  ];

  return (
    <Box w={"100%"} overflowX={"hidden"}>
      <Slider {...settings}>
        {boxes.map((item, index) => (
          <Flex key={index} p={2}>
            <Box
              maxW={"626px"}
              w={"100%"}
              h={{ base: "380px", md: "420px", xl: "560px" }}
              mx={"auto"}
            >
              <Image
                src={item}
                alt="Imagen del ministerio"
                style={{
                  borderRadius: "20px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};
