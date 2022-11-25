import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebaseConfig";

function Signup({ setIsLogin }) {
  const [error, setError] = useState(false);
  const [signupError, setSignupError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (event.target.password.value != event.target.confirmPassword.value) {
      setError(true);
      return;
    }
    setError(false);
    let email = event.target.email.value;
    let password = event.target.password.value;
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setSignupError(false);
      console.log(result);
    } catch (error) {
      setSignupError(true);
    }
    return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap="1rem">
        {signupError && <Typography>Signup failed</Typography>}
        <TextField size="small" name="email" label="email" required />
        <TextField size="small" name="password" label="password" type="password" required />
        <TextField
          size="small"
          name="confirmPassword"
          label="confirm password"
          type="password"
          error={error}
          helperText={error ? "password must match" : ""}
          required
        />
        <Button variant="contained" type="submit">
          Signup
        </Button>
        <Box display="flex" flexDirection="row">
          <Typography>Already have an account?</Typography>
          <Link
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Login
          </Link>
        </Box>
      </Box>
    </form>
  );
}

export default Signup;
