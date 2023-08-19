import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const BrandSlider = () => {
  var settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 10,
    slidesToScroll: 10,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className="brand_slider">
      <Slider {...settings}>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
        <div>. SOLANA HACKATHON</div>
      </Slider>
    </div>
  );
};

export default BrandSlider;
