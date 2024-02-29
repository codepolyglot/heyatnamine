import React from "react";
import {
    Container,
    Flex,
    Heading,
    Icon,
    Image,
    SimpleGrid,
    Stack,
    StackDivider,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import {CiPill} from "react-icons/ci";
import {FaWineBottle} from "react-icons/fa";
import {GiPokerHand} from "react-icons/gi";
import lection from "./../assets/googlebusiness/leksiya.jpg";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const Features = () => {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Xidmətlərimiz
          </Text>
          <Heading>Narkomaniya və asılılıqdan müalicə</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Narkomaniya və asılılıqdan müalicə xidmətlərimizdən istifadə edərək
            mənəvi və fiziki sağlamlığınızı qoruyub, inkişaf etdirin.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={CiPill} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Narkotik Asılılığı"}
            />
            <Feature
              icon={<Icon as={FaWineBottle} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"İçki Asılılığı"}
            />
            <Feature
              icon={<Icon as={GiPokerHand} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Qumar Asılılığı"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={lection}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Features;
