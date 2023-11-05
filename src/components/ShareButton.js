import React from "react";
import { Button } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { RWebShare } from "react-web-share";

function ShareButton({ marginRight, color, variant, iconColor }) {
  return (
    <RWebShare
      data={{
        text: "Web share - Wally",
        url: "https://vangari.netlify.app/",
        title: "WALLY",
      }}
    >
      <Button
        variant={variant}
        sx={{
          marginRight: { marginRight },
          color: { color },
          borderRadius: 10,
          borderColor: "white",
          fontFamily: "monospace",
          boxShadow: 5,
          bgcolor: "white",
        }}
      >
        <ShareOutlinedIcon
          fontSize="medium"
          sx={{ color: { iconColor }, borderRadius: 5 }}
        ></ShareOutlinedIcon>
      </Button>
    </RWebShare>
  );
}

export default ShareButton;
