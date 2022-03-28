import React from "react";
import "./style.css";
import imaG from "../../assets/images/homeBg1.jpg";
import imaG1 from "../../assets/images/homeBg1.jpg";
import imaG2 from "../../assets/images/homeBg3.jpg";

import ProductDetail from "../productDetail";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const slideImages = [imaG, imaG2, imaG1];

const responsive = {
  0: { items: 1 },
  300: { items: 1 },
  400: { items: 1 },
  500: { items: 2 },
  600: { items: 2 },
  700: { items: 3 },
  800: { items: 4 },
  900: { items: 3 },
  1000: { items: 5 },
  1224: { items: 6 },
  1324: { items: 7 },
  1424: { items: 8 },
};

const items = [
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
  <ProductDetail />,
];
const SlideShow = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
};

export default SlideShow;
