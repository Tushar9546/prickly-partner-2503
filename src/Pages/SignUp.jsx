import { Box, Button, Flex, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { register } from "../Redux/AuthReducer/action";
import { Link as RouterLink} from 'react-router-dom';

  
const SignUp=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  
    const dispatch=useDispatch();
    const location=useLocation();
    console.log(location);
  
    const navigate=useNavigate();
  
    const comingFrom=location.state?.data || "/signin";
  
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(email && password){
        dispatch(register({email,password}))
        .then((res)=>{
          console.log("Succes Register",res);
          navigate(comingFrom,{replace :true});
        })
      }
  
    }
   return (
    <Box>
        
        
    <Flex  w="97%" py="3rem" margin="auto" gap="13rem">
        <Box>
            <Image src="https://www.jiomart.com/msassets/images/login-banner.jpg" alt="Login Image" marginLeft={200} borderLeftRadius="20px"/>
        </Box>
        
            <Flex alignItems="center" gap="5px" my="12">
            <form onSubmit={handleSubmit}>
            <Box marginTop="10">
            <Box>
                <Heading fontSize="27px" mb="2">Sign Up</Heading>
            <Text>Enter Your Details:</Text>
            </Box>
            </Box>
            <br />
            <br />
        <div>
          <label>User Email</label>
          <br />
          <br />
          <Input 
          type="email"
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label>User Password</label>
          <br />
          <br />
          <Input 
          type="password"
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <br />
        <Button type="submit" backgroundColor="#008ecc" color="white" w="30rem">
        Sign Up
        </Button>
        <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <RouterLink to="/signin" style={{color:"#008ecc"}}>Sign In</RouterLink>
              </Text>
        </Stack>
      </form>
      </Flex>
      </Flex>
    </Box>
   )
      
  }

  export default SignUp;
