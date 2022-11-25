import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";
import { UserState } from "../contexts/UserContext";

function Header() {
  const [isOpen, setIsOpen] = useState(null);
  const navigate = useNavigate();
  const { user, setUser } = UserState();
  
  const handleClick = (event) => {
    setIsOpen(event.currentTarget);
  };

  const handleClose = () => {
    setIsOpen(null);
  };

  const logOut = ()=>{
    signOut(auth);
    setUser(null)
  }

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
          <div >
            <Button
              id="basic-button"
              aria-controls={Boolean(isOpen) ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(isOpen) ? "true" : undefined}
              onClick={handleClick}
            >
              Dashboard
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={isOpen}
              open={Boolean(isOpen)}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
