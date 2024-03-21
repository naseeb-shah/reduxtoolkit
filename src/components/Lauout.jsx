import { Outlet } from "react-router-dom";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

export const Layout = () => {
  return (
    <>
    <Flex as="flex" position={'fixed'} top={0}right={0} opacity={.8}>
    <Text mr={10}>
        Help 
    </Text>
    <Text mr={10}>Orders & Returns</Text>
    <Text mr={10}>Hi,Jhon</Text>
    </Flex>
    <Flex w={"100%"}  p={15} alignItems={"baseline"}>
      <Heading
      
       
        textAlign={"left"}
        w={"25%"}
      >
        ECOMMERCE
      </Heading>
      <Flex
        flexDir={"row"}
        w={"55%"}
       
        justifyContent={"space-between"}
        fontWeight={"600"}
      >
        <Text>Categories</Text>
        <Text>Sale</Text>
        <Text>Clearance</Text>
        <Text>New Stock</Text>
        <Text>Trending</Text>
      </Flex>
      <Flex  w={"20%"}  alignItems={"center"}justifyContent={"flex-end"}  justifyItems={'flex-end'}  >
       
        
            <CiSearch size={25}  style={{marginRight:20}}/>
         
            <CiShoppingCart size={25} />
         
      </Flex>
    </Flex>
    <Box bg={"rgb(244,245,245)"}>
        <Text textAlign={'center'}>
      {'<  Get 10% off on business sign up  >'}
        </Text>

    </Box>
    <Outlet />
    </>
  );
};
