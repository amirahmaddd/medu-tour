import { colors } from "@/theme";
import Link from "next/link";
import React from "react";

const BtnLink = ({
  text,
  href,
  secondary,
}: {
  text?: string;
  href: string;
  secondary?: boolean;
}) => {
  return (
    <Link
      href={`${href}`}
      className="rounded-md h-8 px-4 flex justify-center items-center text-center text-xs"
      style={{
        backgroundColor: secondary ? "inherit" : colors.primary,
        color: secondary ? colors.primary : "white",
        border: `1px solid ${colors.primary}`,
      }}
    >
      {text}
    </Link>
  );
};

export default BtnLink;
