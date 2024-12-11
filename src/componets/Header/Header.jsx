import React from "react";
import "./Header.css";
import { AppBar, Toolbar, Grid, Button, Box } from "@mui/material";
import logoSvg from "../../assets/assets_frontend/logo.svg";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ background: "#fff", boxShadow: "none", padding: "0 16px" }}
    >
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Logo Section */}
          <Grid item xs={3} sm={2}>
            <Box display="flex" alignItems="center">
              <img
                src={logoSvg}
                alt="logo"
                style={{ height: "40px", width: "auto" }}
              />
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={6} sm={7}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Button sx={{ color: "#333" }}>HOME</Button>
              </Grid>
              <Grid item>
                <Button sx={{ color: "#333" }}>ALL DOCTORS</Button>
              </Grid>
              <Grid item>
                <Button sx={{ color: "#333" }}>ABOUT</Button>
              </Grid>
              <Grid item>
                <Button sx={{ color: "#333" }}>CONTACT</Button>
              </Grid>
            </Grid>
          </Grid>

          {/* Login Button */}
          <Grid item xs={3} sm={2} textAlign="right">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                "&:hover": { backgroundColor: "#115293" },
              }}
            >
              Create Account
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
