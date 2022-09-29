
import { Box, Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import {Link as RouterLink} from "react-router-dom";

const SignIn = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const dispatch=useDispatch();
  const location=useLocation();
  console.log(location);

  const navigate=useNavigate();

  const comingFrom=location.state?.data || "/";

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password}))
      .then((res)=>{
        console.log("Succes Login",res);
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
                <Heading fontSize="27px" mb="2">Sign In</Heading>
            <Text>Sign In to access your Orders, Offers and Wishlist.</Text>
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
        
        
        <Text align={'center'}>
                Don't have an account? <RouterLink to="/signup" style={{color:'#008ecc'}}>Signup</RouterLink>
              </Text>

              <Box textAlign="center">
            <Text fontSize="sm" fontWeight="500">By continuing you agree to our <span style={{color:"red"}}>Terms of service</span></Text>
            <Text fontSize="sm" fontWeight="500">and <span style={{color:"red"}}>Privacy & Legal Policy.</span></Text>
        </Box>

      </form>
      </Flex>
      </Flex>
    </Box>
  );
};

export default SignIn;

     