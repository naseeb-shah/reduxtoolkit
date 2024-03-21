
import { Box, Text,Input, TagLabel,Label,useToast, Button} from "@chakra-ui/react"
import { useState } from "react"
import { postData } from "../utilis/api"
import { setUser } from "../redux/userslice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
export const CreateAccount=()=>{
    const toast = useToast()

    const user= useSelector((data)=>data)
    const navigate=useNavigate()
    console.log(user)
    const dispatch= useDispatch()
 const [data,setData]= useState({})
 const handleChange=(e)=>{
     setData({...data,[e.target.name]:e.target.value})
 }



 const handle=async()=>{
    console.log(data)
    await postData('/user/createuser',data).then((e)=>{

         
        dispatch(setUser(e))
        toast({
            title: 'Account created.',
            position:'top',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        navigate('/login')


    }).catch((e)=>{
        console.log(e,'form e blaock')
    })
 }
    return <Box  w={'30%'} borderRadius={20} borderColor={"#C1C1C1"} borderWidth={1} m={'auto'} mt={"50"} p={3} pb={35}>

        <Text textAlign={'center'} fontWeight={"600"} fontSize={22} mt={5}>Create your account</Text>
        <Box display="flex" justifyContent="center" alignItems="center" flexDir={'column'}>
            <Box display={'flex'} justifyContent={'flex-start'} w={"75%"} flexDir={'column'} mb={5}>
            <Text >
                Name
            </Text>
         <Input display={'block'} name="username" placeholder='Enter' size='sm'onChange={handleChange} />
            </Box>

            <Box display={'flex'} justifyContent={'flex-start'} w={"75%"} flexDir={'column'} mb={5}>
            <Text >
                Email
            </Text>
         <Input display={'block'} name="email" placeholder='Enter' size='sm'  onChange={handleChange}/>
            </Box>
            <Box display={'flex'} justifyContent={'flex-start'} w={"75%"} flexDir={'column'} mb={5}>
            <Text >
                Password
            </Text>
         <Input display={'block'} name="password" type="password" placeholder='Enter' size='sm' onChange={handleChange} />
            </Box>

<Button w={"75%"} bg={"black"} borderRadius={0} color={'white'} onClick={handle}> Create Account</Button>

         </Box>
         <Text textAlign={'center'} mt={30} mb={30}>
         Have an Account?
         <span onClick={()=>navigate('/login')}>LogIn</span>
         </Text>

    </Box>
}