import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UserState } from "../contexts/UserContext";

function Header() {
  const navigate = useNavigate();
  const { user } = UserState();
  console.log(user);
  return (
    <AppBar position="sticky" style={{ backgroundColor: "white" }}>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1 }}
          color="black"
        >
          Xhip Blog
        </Typography>
        {user == null || user == undefined ? (
          <Button
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </Button>
        ) : (
          <Button>Account</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
