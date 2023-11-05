import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import "../styles/GradientBackground.css";
import MenuIcon from "@mui/icons-material/Menu";
import ShareButton from "./ShareButton";
import TextButton from "./TextButton";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      className="navbar_gradient"
      position="sticky"
      variant="contained"
      sx={{
        bgcolor: "transparent" /*#101418*/,
        opacity: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: "white",
        borderWidth: 1,
        boxShadow: 10,
      }}
    >
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            fontFamily={"cursive"}
            sx={{ flexGrow: 1, color: "white", fontSize: 50 }}
          >
            VANGARI
          </Typography>
          <Box display={{ xs: "block", ms: "none", md: "none" }}>
            <Button
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="outlined"
              sx={{
                color: "white",
                borderRadius: 10,
                borderColor: "white",
                boxShadow: 5,
              }}
            >
              <MenuIcon></MenuIcon>
            </Button>
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ borderRadius: 20 }}
          >
            <MenuItem onClick={handleClose}>
              <TextButton
                link="https://zarfdev.netlify.app/"
                btnName="ABOUT ME"
                color="black"
                variant="text"
              ></TextButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ShareButton
                color="black"
                variant="text"
                iconColor="black"
              ></ShareButton>
            </MenuItem>
          </Menu>
          <Box display={{ xs: "none", ms: "block", md: "block" }}>
            <ShareButton
              marginRight={5}
              color="white"
              variant="outlined"
              iconColor="white"
            ></ShareButton>
            <TextButton
              link="https://zarfdev.netlify.app/"
              btnName="ABOUT ME"
              color="white"
              variant="outlined"
            ></TextButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
