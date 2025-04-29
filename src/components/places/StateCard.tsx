import { State } from "@/types/places";
import Image from "next/image";
import React from "react";
import BtnLink from "../common/BtnLink";

const StateCard = ({ data }: { data: State }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden h-72 flex flex-col bg-white shadow-xs">
      <div className="h-1/2 w-full">
        <Image
          src={data.image}
          alt={data.title}
          width={100}
          height={100}
          className="object-cover w-full h-full"
          // className="object-cover"
        />
      </div>
      <div className="px-4 mt-4">
        <div className="text-md ">{data.title}</div>
        <div className="text-xs text-gray-500 mt-3">{data.subTitle}</div>
        <div className="text-xs text-gray-500 mt-1">
          مرکز استان: {data.capitalName}
        </div>
        <div className="flex flex-row justify-center items-center mt-2 gap-2">
          <BtnLink text="مشاهده جاذبه این شهر" href="#" />
          <BtnLink text="رزور بازدید" href="#" secondary />
        </div>
      </div>
    </div>
  );
};

export default StateCard;
