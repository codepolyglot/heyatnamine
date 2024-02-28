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
  {
    id: 4,
    title: "Peşəkar komandamız",
    url: "/ourteam",
  },
];

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const style = {
    padding: "5px",
    border: "1px solid #383d47",
    borderRadius: "5px",
    display: isOpen ? "block" : "none",
  };

  return (
    <>
      <Box
        bgGradient={useColorModeValue(
          "linear(to-t, #f1f1f1, #f1f1f1)",
          "linear(to-t, #1a202c, #1a202c)"
        )}
        px={4}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: isOpen && "flex", md: "flex" }}
              flexDirection={{
                base: isOpen ? "column" : "none",
              }}
            >
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              {isOpen ? (
                <Box
                  position={isOpen ? "absolute" : "relative"}
                  left={isOpen ? "0" : "0"}
                  zIndex={isOpen ? "100" : "0"}
                  p={4}
                  borderRadius={isOpen ? "0" : "10px"}
                  w={isOpen ? "50%" : "auto"}
                  h={isOpen ? "100%" : "auto"}
                  top={isOpen ? "30" : "0"}
                >
                  {Links.map((link, index) => (
                    <span key={index} style={style}>
                      <Link key={link.id} to={link.url}>
                        {link.title}
                      </Link>
                    </span>
                  ))}
                </Box>
              ) : (
                <>
                  {Links.map((link, index) => (
                    <span key={index} style={style}>
                      <Link key={link.id} to={link.url}>
                        {link.title}
                      </Link>
                    </span>
                  ))}
                </>
              )}
            </HStack>
            <Box>
              <img src={logo} alt="logo" width="60" />
            </Box>
            {/*  */}
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
