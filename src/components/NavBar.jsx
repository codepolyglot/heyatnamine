import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
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
];



const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bgGradient={useColorModeValue(
          "linear(to-t, #f1f1f1, #f1f1f1)",
          "linear(to-t, #1a202c, #1a202c)"
        )}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <img src={logo} alt="logo" width="60" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link key={link.id} to={link.url}>
                  {link.title}
                </Link>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
