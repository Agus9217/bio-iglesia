import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Flex
      width={"full"}
      h={"100dvh"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign="center"
      direction={"column"}
      py={10}
      px={6}
    >
      <Heading display="inline-block" as="h2" size="2xl">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>
      <Box>
        <Button rounded={"none"} asChild>
          <Link href="/">Go to Home</Link>
        </Button>
      </Box>
    </Flex>
  );
}
