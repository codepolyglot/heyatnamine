import { Avatar, Box, Center, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import SocialProfileWithImageHorizontal from "./OpenCard";
import amal from "./../assets/amal.jpg";
import sahil from "./../assets/sahil.jpg";
import rovsen from "./../assets/rovsen.jpg";

const SocialProfileSimple = () => {
  const [cardState, setCardState] = useState(null);

  const myData = [
    { id: 1, url: `${amal}`, name: "Amal" },
    { id: 2, url: `${sahil}`, name: "Sahil" },
    { id: 3, url: `${rovsen}`, name: "Rövşən" },
  ];

  return (
    <>
      <Center
        display={"flex"}
        flexWrap={"nowrap"}
        padding={"10"}
        alignItems={"center"}
        justifyContent={"space-between"}
        py={6}
      >
        <Box
          /*  minW={"100%"}
        maxW={'20vw'} */
          /*   w={'full'} */
          className="boxIm"
          maxW={"20vw"}
          w={"full"}
          minW={"fit-content"}
          height={"100%"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"xl"}
          roundedBottomEnd={"lg"}
          roundedTopStart={"lg"}
          p={6}
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          gap={"2"}
          alignItems={"center"}
        >
          {myData.map((item, index) => (
            <Avatar
              key={index}
              onClick={() => setCardState(item)}
              id={item.id}
              size={"xl"}
              src={item.url}
              mb={4}
              pos={"relative"}
              cursor={"pointer"}
              _after={{
                content: `"${item.id}"`,
                fontSize: "10",
                w: 4,
                h: 4,
                color: "black",
                bg: "green.300",
                border: "2px solid white",
                pos: "absolute",
                bottom: 0,
                right: 3,
              }}
            />
          ))}
        </Box>
        <Box>
          {cardState ? (
            <SocialProfileWithImageHorizontal
              cardState={cardState}
              setCardState={setCardState}
            />
          ) : (
            ""
          )}
        </Box>
      </Center>
    </>
  );
};

export default SocialProfileSimple;
