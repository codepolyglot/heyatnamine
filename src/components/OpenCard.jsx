"use client";

import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function SocialProfileWithImageHorizontal({
  cardState,
  setCardState,
}) {
  return (
    <Center py={1}>
      <Stack
        position={"relative"}
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "70vw" }}
        height={{ sm: "100%", md: "35rem" }}
        direction={{ base: "column", md: "row" }}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" src={cardState.url} alt="#" />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Text
            textAlign={"center"}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
            position={"absolute"}
            right={"15px"}
            top={"15px"}
            fontWeight={"bold"}
            fontFamily={"sans-serif"}
            onClick={() => setCardState(null)}
            cursor={"pointer"}
          >
            <IoIosCloseCircleOutline fontSize={"30"} />
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {cardState.name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {`@ ${cardState.name}`}
          </Text>
          <Text
            textAlign={"center"}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            Actress, musician, songwriter and artist. PM for work inquires or
            <Text color={"blue.400"}>#tag</Text>
            me in your posts
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #music
            </Badge>
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Message
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Follow
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
