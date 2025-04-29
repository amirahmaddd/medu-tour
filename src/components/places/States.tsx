"use client";
import React from "react";
import StateCard from "./StateCard";
import { useAllStates } from "@/hooks/places/useAllStates";
import { StateCategory } from "@/types/places";
import { colors } from "@/theme";
import Image from "next/image";
import chevron from "@/assets/icon/chevron.svg";
import arrow from "@/assets/icon/arrow.svg";

const States = () => {
  const [showSortOptions, setShowSortOptions] = React.useState(false);
  const [selectedSort, setSelectedSort] = React.useState("جدیدترین");

  const {
    loading,
    states,
    nextPage,
    prevPage,
    category,
    setCategory,
    hasNextPage,
    hasPrevPage,
  } = useAllStates();

  const sortOptions = ["جدیدترین", "محبوب‌ترین", "بیشترین بازدید"];

  return (
    <section className="px-4 md:px-12 py-8 mx-auto flex flex-col justify-center items-center gap-3 w-full">
      <div className="font-bold text-2xl">همه استان ها</div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-2">
        <div>
          <div className="flex gap-3 z-10 relative">
            {Object.values(StateCategory).map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-2 py-1 rounded-md border-[1px] border-gray-300 cursor-pointer `}
                style={{
                  backgroundColor: item === category ? colors.secondary : "",
                  color: item === category ? colors.textSecondary : "gray",
                }}
              >
                {item === "RELIGIOUS"
                  ? "مذهبی"
                  : item === "HISTORICAL"
                  ? "تاریخی"
                  : item === "CULTURAL"
                  ? "فرهنگی"
                  : item === "NATURAL"
                  ? "طبیعی"
                  : item}
              </button>
            ))}
          </div>
        </div>
        <div
          className="flex justify-center items-center gap-1 relative"
          style={{ color: colors.textSecondary }}
        >
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setShowSortOptions(!showSortOptions)}
          >
            مرتب سازی بر اساس{" "}
            <Image
              src={arrow}
              alt=">"
              className={showSortOptions ? "-rotate-90" : "rotate-90"}
            />
          </div>

          {showSortOptions && (
            <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-[150px] z-20">
              {sortOptions.map((option) => (
                <div
                  key={option}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedSort(option);
                    setShowSortOptions(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {states.map((item) => (
          <StateCard key={item.id} data={item} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 relative z-10">
        <button
          onClick={prevPage}
          disabled={!hasPrevPage}
          className={`bg-white w-6 h-6 rounded-sm flex justify-center items-center text-center ${
            hasPrevPage ? "cursor-pointer" : "opacity-55"
          }`}
        >
          <Image src={chevron} alt=">" />
        </button>
        <button
          onClick={nextPage}
          disabled={!hasNextPage}
          className={`bg-white w-6 h-6 rounded-sm flex justify-center items-center text-center ${
            hasNextPage ? "cursor-pointer" : "opacity-55"
          }`}
        >
          <Image src={chevron} alt=">" className="rotate-180" />
        </button>
      </div>
    </section>
  );
};

export default States;
