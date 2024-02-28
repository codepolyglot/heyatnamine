'use client'

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'

import data from "./../db/db.json"
import { useState } from 'react'
import SocialProfileWithImageHorizontal from './OpenCard';

export default function SocialProfileSimple() {

    const [cardState, setCardState] = useState(null);



  return (
    <>
    <Center display={'flex'} flexWrap={"wrap"}  padding={"10"} alignItems={"start"}  justifyContent={"space-between"} py={6}>
      <Box
       /*  minW={"100%"}
        maxW={'20vw'} */
      /*   w={'full'} */
      className='boxIm'
      maxW={"20vw"}
      w={'full'}
      minW={"fit-content"}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        display={'flex'}
        flexDirection={'column'}
        gap={"2"}
        alignItems={"center"}
        >
    
      
      {data.map((item,index)=>(
         <Avatar
         key={index}
         onClick={()=>setCardState(item.id)}
         id={item.id}
         size={'xl'}
         src={
           'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
         }
         mb={4}
         pos={'relative'}
         cursor={"pointer"}
         _after={{
           content: `"${item.id}"`,
           fontSize:"10",
           w: 4,
           h: 4,
           color:"black",
           bg: 'green.300',
           border: '2px solid white',
           rounded: 'full',
           pos: 'absolute',
           bottom: 0,
           right: 3,
         }}
       />
      ))}
    
   
      
      </Box>
      {cardState ? <SocialProfileWithImageHorizontal cardState={cardState} setCardState={setCardState} /> : "" }
    </Center>
    
    </>
  )
}