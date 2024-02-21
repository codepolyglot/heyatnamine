import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const AboutUs = () => {
  return (
<>
<NavBar />
<Box p="6">
      <Heading as="h2" size="xl" mb="4">
        About Us
      </Heading>
      <Text fontSize="lg" mb="4">
        Welcome to our About Us page. We are dedicated to providing you with
        high-quality products and excellent service.
      </Text>
      <Flex align="center">
        <Box mr="2" w="8" h="8" bg="blue.500" borderRadius="full"></Box>
        <Text fontWeight="bold">Mission:</Text>
        <Text ml="2">
          Our mission is to exceed customer expectations by delivering
          innovative products backed by exceptional service.
        </Text>
      </Flex>
      <Flex align="center">
        <Box mr="2" w="8" h="8" bg="green.500" borderRadius="full"></Box>
        <Text fontWeight="bold">Vision:</Text>
        <Text ml="2">
          Our vision is to become the industry leader by consistently
          anticipating customer needs and adapting to market trends.
        </Text>
      </Flex>
    </Box>
    <Footer />
</>
  );
};

export default AboutUs;
