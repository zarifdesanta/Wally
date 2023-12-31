import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function TextButton({ variant, color, btnName, link, bgColor }) {
  return (
    <Link to={link} target="_blank">
      <Button
        variant={variant}
        sx={{
          color: { color },
          borderRadius: 10,
          borderColor: "white",
          fontFamily: "monospace",
          boxShadow: 5,
          bgcolor: bgColor,
        }}
      >
        {btnName}
      </Button>
    </Link>
  );
}

export default TextButton;
