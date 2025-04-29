"use client";
import React from "react";
import Header from "./Header";
import { HeroType } from "@/types/layout";
import { useHero } from "@/hooks/layout/useHero";
import BtnLink from "./common/BtnLink";
import Slider from "./common/Slider";

const Hero = () => {
  const { loading, data } = useHero({ type: HeroType.index });
  return (
    <div className="w-full lg:h-[80vh] relative text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${data?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 h-full">
        <div>
          <Header />
        </div>
        <div className="w-full flex lg:flex-row flex-col lg:justify-between lg:h-full justify-end mt-auto">
          <div className="h-full lg:max-w-1/2 w-full flex flex-col gap-2 justify-start  items-center lg:mt-16 mt-8 p-4 lg:p-8">
            <h2 className="text-[45px] font-bold">{data?.title}</h2>
            <p className="text-md max-w-[555px]">{data?.description}</p>
            <div className="w-[100px] mt-4">
              {data?.link && (
                <BtnLink href={data.link.href} text={data.link.text} />
              )}
            </div>
          </div>
          <div className="lg:max-w-1/2 lg:h-full lg:mt-auto">
            <div className="lg:mt-[30%]">
              <Slider list={data?.slider} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
