"use client";
import { menuItems } from "@/constants/layout";
import { colors } from "@/theme";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <nav>
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <div className="md:hidden absolute top-2 right-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {/* {isOpen ? <HiX size={24} /> : <HiMenu size={24} />} */}
              <Image
                alt="menu"
                src={"/images/menu.svg"}
                width={24}
                height={24}
              />
            </button>
          </div>
          {/* منوی دسکتاپ */}
          <div className="hidden w-full md:flex md:items-center justify-between md:space-x-8 md:space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`${
                  path === item.href ? "border-b-[1px] border-[#7AE2CF]" : ""
                }`}
                style={{ color: path === item.href ? colors.primary : "white" }}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-9">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
