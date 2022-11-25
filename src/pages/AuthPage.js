import { Box, Button, TextField } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { auth } from "../config/firebaseConfig";
import { UserState } from "../contexts/UserContext";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { setUser } = UserState(); 
  const googleAuthProvider = new GoogleAuthProvider();

  const signInWithGoogle = ()=>{
    signInWithPopup(auth, googleAuthProvider).then((res)=>{
        console.log(res);
        setUser(res.user);
        navigate('/');
    })
  }
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box padding="5rem 4rem" border="1px solid gray">
        { isLogin ? <Login setIsLogin={setIsLogin}/> : <Signup setIsLogin={setIsLogin}/>}
        <GoogleButton style={{marginTop:"1rem"}}
        onClick={signInWithGoogle} />
      </Box>
    </Box>
  );
}

export default AuthPage;
