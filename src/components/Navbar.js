import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/GradientBackground.css";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { RWebShare } from "react-web-share";

function Navbar() {
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
          <RWebShare
            data={{
              text: "Web share - Wally",
              url: "http://wally.netlify.app",
              title: "WALLY",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                marginRight: 1,
                color: "white",
                borderRadius: 1,
                borderColor: "white",
                fontFamily: "monospace",
              }}
            >
              <ShareOutlinedIcon
                fontSize="medium"
                sx={{ color: "white", borderRadius: 5 }}
              ></ShareOutlinedIcon>
            </Button>
          </RWebShare>
          <Link to="https://zarfdev.netlify.app/" target="_blank">
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderRadius: 1,
                borderColor: "white",
                fontFamily: "monospace",
              }}
            >
              ABOUT ME
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
