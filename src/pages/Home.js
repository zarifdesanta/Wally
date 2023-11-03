import { Container, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import WallpaperCard from "../components/WallpaperCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

import { WallpaperList } from "../helper/WallpaperList";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/CarouselSlider.css";
import { Carousel } from "react-responsive-carousel";
import CatagoryButton from "../components/CatagoryButton";

function Home() {
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  const [imageListNew, setImageListNew] = useState([]);
  const imageListNewRef = ref(storage, "newImages/");

  const [activeBtn, setActiveBtn] = useState("all");
  const [catagory, setCatagory] = useState("");

  const handleSetCatagory = (value) => {
    setCatagory(value);
  };

  const handleSetActiveBtn = (value) => {
    setActiveBtn(value);
  };

  /*
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);*/

  useEffect(() => {
    listAll(imageListNewRef).then((response) => {
      response.items.forEach((item) => {
        const itemItself = item;
        const imageName = item.name;
        getDownloadURL(item).then((url) => {
          const imageObj = {
            imageName,
            url,
            itemItself,
          };
          setImageListNew((prev) => [...prev, imageObj]);
        });
      });
    });

    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        const itemItself = item;
        const imageName = item.name;
        getDownloadURL(item).then((url) => {
          const imageObj = {
            imageName,
            url,
            itemItself,
          };
          setImageList((prev) => [...prev, imageObj]);
        });
      });
    });
  }, []);

  return (
    <div>
      <Container sx={{ paddingTop: 4 }}>
        <Carousel
          emulateTouch
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoFocus
          autoPlay={true}
          interval={3000}
        >
          {/*imageListNew.map((item, key) => {
            return (
              <div>
                <img className="img" src={item.url} />
                <p className="label">{item.imageName.split("_")[0]}</p>
              </div>
            );
          })*/}
          {WallpaperList.map((item, key) => {
            return (
              <div>
                <img className="img" src={item.image} />
                <p className="label">{item.name}</p>
              </div>
            );
          })}
        </Carousel>
      </Container>
      <Container
        sx={{
          textAlign: "center",
          paddingTop: 4,
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Typography
            variant="text"
            shadows={20}
            sx={{
              fontFamily: "monospace",
              fontSize: 40,
              color: "white",
              boxShadow: 20,
              borderRadius: 10,
            }}
          >
            -transform your space into a{" "}
            <span style={{ color: "aqua" }}>cozy sanctuary</span>-
          </Typography>
        </Grid>
        <Grid
          container
          columnGap={2}
          justifyContent="center"
          alignItems="center"
          paddingTop={4}
        >
          <CatagoryButton
            btnName="ALL"
            onClick={() => {
              handleSetCatagory("all");
              handleSetActiveBtn("all");
            }}
            bgColor={activeBtn === "all" ? "black" : "transparent"}
          ></CatagoryButton>
          <CatagoryButton
            btnName="LIGHT"
            onClick={() => {
              handleSetCatagory("light");
              handleSetActiveBtn("light");
            }}
            bgColor={activeBtn === "light" ? "black" : "transparent"}
          ></CatagoryButton>
          <CatagoryButton
            btnName="DARK"
            onClick={() => {
              handleSetCatagory("dark");
              handleSetActiveBtn("dark");
            }}
            bgColor={activeBtn === "dark" ? "black" : "transparent"}
          ></CatagoryButton>
        </Grid>
      </Container>
      <Container sx={{ paddingTop: 5 }}>
        <Grid
          justifyContent="center"
          rowSpacing={3}
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {/*iterate here, then return this grid block*/}
          {imageList
            .filter((filteredItem) => {
              if (catagory == "all" || catagory == "") {
                return filteredItem;
              } else if (
                catagory == "light" &&
                !filteredItem.imageName.toLowerCase().includes("dark")
              ) {
                return filteredItem;
              } else if (
                catagory == "dark" &&
                filteredItem.imageName.toLowerCase().includes(catagory)
              ) {
                return filteredItem;
              }
            })
            .map((imageItem, apiKey) => {
              return (
                <Grid>
                  <WallpaperCard
                    key={apiKey}
                    image={imageItem.url}
                    name={imageItem.imageName.split("_")[0]}
                    res={imageItem.imageName.split("_")[1].slice(0, -4)}
                    item={imageItem.itemItself}
                  ></WallpaperCard>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
