import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";

function WallpaperCard({ image, name, res, item }) {
  return (
    <Card
      variant="contianed"
      sx={{
        bgcolor: "white" /*#1e1e1e*/,
        width: 340,
        height: 380,
        borderRadius: 10,
        borderColor: "transparent",
        boxShadow: 20,
      }}
    >
      <CardMedia component="img" height={220} image={image}></CardMedia>
      <CardContent>
        <Typography fontFamily={"monospace"} variant="h5" color="black">
          {name}
        </Typography>
        <Typography fontFamily={"monospace"} variant="h10" color="gray">
          {res}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton href={image} download={name} target="_blank">
          <DownloadForOfflineOutlinedIcon
            fontSize="large"
            sx={{ color: "black", borderRadius: 1 }}
          ></DownloadForOfflineOutlinedIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default WallpaperCard;
