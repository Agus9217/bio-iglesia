'use client'

import { Flex } from "@chakra-ui/react"
import { FaFacebookF, FaInstagram } from "react-icons/fa6"

export const Socials = () => {
  return (
    <Flex
      w={'full'}
      justifyContent={'flex-end'}
      color={'white'}
      gap={4}
      mr={{ base: 4, lg: 0 }}
    >
      <FaFacebookF size={'20px'} />
      <FaInstagram size={'20px'} />
    </Flex>
  )
}

