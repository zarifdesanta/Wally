import React from "react";
import { Button } from "@mui/material";

function CatagoryButton({ btnName, type, onClick, bgColor }) {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      sx={{
        bgcolor: bgColor,
        color: "white",
        boxShadow: 20,
        borderColor: "white",
        borderRadius: 5,
      }}
    >
      {btnName}
    </Button>
  );
}

export default CatagoryButton;
