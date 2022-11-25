import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";

function Login({setIsLogin}) {
  const [error, setError] = useState(false);
  const navigate =useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(event.target.email.value === "" || event.target.password.value === ""){
      setError(true);
        console.log("no value");
        return;
    }
    let email = event.target.email.value;
    let password = event.target.password.value;

    signInWithEmailAndPassword(auth, email, password).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
    // try {
    //   const result = await signInWithEmailAndPassword(auth,email,password);
    //   setError(false);
    //   navigate('/');
    //   console.log(result);
    // } catch (error) {
    //   setError(true);
    //   console.log(error);
    // }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        gap="1rem"
      >
        {error && <Typography color="error">Login failed</Typography>}
        <TextField size="small" name="email" label="email" required />
        <TextField size="small" name="password" label="password" type="password" required />
        <Button variant="contained" type="submit">Login</Button>
        <Box display="flex" flexDirection="row">
            <Typography>Create new account?</Typography>
            <Link onClick={()=>{setIsLogin(false)}}>Signup</Link>
        </Box>
      </Box>
    </form>
  );
}

export default Login;
