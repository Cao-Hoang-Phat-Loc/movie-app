import React from "react";
import { AppBar, Toolbar, Button, TextField } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          style={{ marginLeft: "auto", marginRight: "20px" }}
        />
        {isAuthenticated ? (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" onClick={login}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
