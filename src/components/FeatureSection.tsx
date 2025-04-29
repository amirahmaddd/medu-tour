"use client";
import { useIndexFeature } from "@/hooks/layout/useIndexFeature";
import React from "react";
import BtnLink from "./common/BtnLink";

const FeatureSection = () => {
  const { data, loading } = useIndexFeature();
  return (
    <div className="px-4 md:px-12 mb-4">
      <section className=" py-8 mx-auto flex flex-col justify-center items-center gap-3 w-full relative rounded-md overflow-hidden ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${data?.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full px-4 md:px-8">
          <div className="flex flex-col justify-center items-center max-w-[700px] mx-auto gap-3 text-white text-center px-4">
            <div className="text-2xl">{data?.title}</div>
            <div className="text-md ">{data?.description}</div>
            <div>
              {data?.link && (
                <BtnLink href={data?.link.href} text={data?.link.text} />
              )}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-8">
            {data?.list?.length &&
              data.list.map((item) => (
                <div
                  className="bg-white/70 rounded-lg overflow-hidden p-2 pb-8 text-gray-700 h-full"
                  key={item.title}
                >
                  <div className="text-3xl mb-2">{item.title}</div>
                  <div>{item.description}</div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
