"use client";
import { useSpecialFeature } from "@/hooks/layout/useSpecialFeature";
import Image from "next/image";
import React from "react";
import BtnLink from "../common/BtnLink";

const SpecialPlace = () => {
  const { data, loading } = useSpecialFeature();
  if (loading || !data) return null;
  return (
    <section className="my-4 flex flex-col justify-center items-center gap-4 w-full">
      <div className="text-2xl">مکان های خاص</div>
      <div className="w-full px-4 flex flex-col lg:flex-row justify-end">
        <div className="flex flex-col lg:flex-row w-full md:max-w-[95%] bg-white rounded-md p-4 h-full relative">
          <div>
            <Image
              className="rounded-md overflow-hidden mx-auto"
              src={data.image}
              alt={data.title}
              width={200}
              height={200}
              style={{ height: 200, width: 200 }}
            />
          </div>
          <div className="w-full h-full flex-1 text-center lg:text-start">
            <div className="px-4 mt-4">
              <div className="font-bold text-lg">{data.title}</div>
              <div className="mt-3">{data.description}</div>
            </div>
            <div className="flex lg:justify-end justify-center mt-2 gap-2 items-center lg:absolute bottom-4 left-4">
              <BtnLink href="" text="نمایش از روی نقشه" secondary />
              <BtnLink href="" text="جزئیات بیشتر" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialPlace;
