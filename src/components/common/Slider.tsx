import { HeroSliderItem } from "@/types/layout";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function CenterMode({ list }: { list?: HeroSliderItem[] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  if (!list?.length) return null;
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {list.map((item) => (
            <div
              key={item.placeId}
              className="px-2 shadow-2xl flex justify-center items-center"
            >
              <Image
                height={230}
                width={300}
                src={item.image}
                alt={item.placeTitle}
                style={{ height: 230, width: 300, objectFit: "cover" }}
                className="rounded-md overflow-hidden mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CenterMode;
