import { Outlet, useNavigate } from "react-router-dom";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

export const Layout = () => {
  const name=useSelector((e)=>e.user.user)
  const navigate=useNavigate()
  return (
    <>
    <Flex as="flex" position={'absolute'} top={0}right={0} opacity={.8}>
    <Text mr={10}>
        Help 
    </Text>
    <Text mr={10}>Orders & Returns</Text>
    <Text mr={10}>{name?name.name:'Hi,Guest'}</Text>
    </Flex>
    <Flex w={"100%"}  p={15} alignItems={"baseline"}>
      <Heading
      
       
        textAlign={"left"}
        w={"25%"}
        onClick={()=>navigate('/')}
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
