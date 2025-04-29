import { menuItems } from "@/constants/layout";
import { colors } from "@/theme";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-44 relative text-white px-4">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("/images/hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: colors.primaryLight }}
        />
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="mx-auto max-w-3xl flex flex-col justify-center items-center gap-4">
          <div className="text-md">
            پنجره واحد خدمات الکترونیک آموزش و پرورش
          </div>
          <div className="text-xs flex justify-between items-center mt-4 max-w-[300px] w-full">
            {menuItems.map((item) => (
              <a key={item.title} href={item.href} style={{ color: "white" }}>
                {item.title}
              </a>
            ))}
          </div>
          <div>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهموم از صنعت چاپ، و با
            استفاده از طراحان
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
