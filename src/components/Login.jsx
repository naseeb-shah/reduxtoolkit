import {
  Box,
  Text,
  Input,
  TagLabel,
  Label,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { postData } from "../utilis/api";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userslice";

export const LogIn = () => {
    const dispatch=useDispatch()
    const toast=useToast()
    const navigate=useNavigate()
    
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const handle = async () => {
    console.log(data);
    await postData("/user/login", data)
      .then((e) => {
        dispatch(setUser(e));
        toast({
          title: "Account created.",
          position: "top",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/interest");
      })
      .catch((e) => {
        console.log(e, "form e blaock");
      });
  };

  return (
    <Box
      w={"35%"}
      borderRadius={20}
      borderColor={"#C1C1C1"}
      borderWidth={1}
      m={"auto"}
      mt={"50"}
      p={3}
      pb={35}
    >
      <Text textAlign={"center"} fontWeight={"600"} fontSize={32} mt={5}>
        Login
      </Text>
      <Text textAlign={"center"} fontWeight={500} fontSize={24}>
        Welcome back to ECOMMERCE
      </Text>
      <Text
        textAlign={"center"}
        fontSize={16}
        opacity={0.8}
        mb={10}
        fontWeight={"400"}
      >
        The next gen business marketplace
      </Text>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir={"column"}
      >
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          w={"75%"}
          flexDir={"column"}
          mb={5}
        >
          <Text>Email</Text>
          <Input
            display={"block"}
            name="email"
            placeholder="Enter"
            size="sm"
            onChange={handleChange}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          w={"75%"}
          flexDir={"column"}
          mb={5}
        >
          <Text>Password</Text>
          <Input
            display={"block"}
            name="password"
            type="password"
            placeholder="Enter"
            size="sm"
            onChange={handleChange}
          />
        </Box>

        <Button
          w={"75%"}
          bg={"black"}
          borderRadius={0}
          color={"white"}
          onClick={handle}
        >
          LOGIN
        </Button>
      </Box>
      <Text textAlign={"center"} mt={30} mb={30}>
        Don’t have an Account?{" "}
        <span onClick={() => navigate("/new-user")}>SIGN UP</span>
      </Text>
    </Box>
  );
};
