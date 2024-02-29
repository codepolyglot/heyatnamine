import React from "react";
import {
    Box,
    Collapse,
    Flex,
    HStack,
    IconButton,
    Link as ChakraLink,
    Stack,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom";
import logo from "./../assets/logo.png";

const Links = [
  {
    id: 1,
    title: "Ana Səhifə",
    url: "/home",
  },
  {
    id: 2,
    title: "Haqqımızda",
    url: "/aboutus",
  },
  {
    id: 3,
    title: "Müraciət et",
    url: "/contactus",
  },
  {
    id: 4,
    title: "Peşəkar komandamız",
    url: "/ourteam",
  },
];

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const gradient = useColorModeValue(
    "linear(to-t, #fff1f1, #fff1f1)",
    "linear(to-t, #1a202c, #1e202c)"
  );

  return (
    <Box bgGradient={gradient} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <ChakraLink
              key={link.id}
              as={Link}
              to={link.url}
              p={2}
              color="black"
              _hover={{
                textDecoration: "none",
                bg: `${gradient}`,
                borderRadius: "md",
              }}
            >
              {link.title}
            </ChakraLink>
          ))}
        </HStack>
        <Flex alignItems="center">
          <Link to="/home">
            <img src={logo} alt="logo" width="120" />
          </Link>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box p={4}>
          <Stack spacing={4}>
            {Links.map((link) => (
              <ChakraLink
                key={link.id}
                as={Link}
                to={link.url}
                p={2}
                color="black"
                _hover={{
                  textDecoration: "none",
                  bg: `${gradient}`,
                  borderRadius: "md",
                }}
              >
                {link.title}
              </ChakraLink>
            ))}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default NavBar;
