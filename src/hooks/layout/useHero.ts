import { indexHeroData } from "@/mock/data";
import { HeroDataType, HeroType } from "@/types/layout";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";

export const useHero = ({ type }: { type: HeroType }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<HeroDataType>();
  useEffect(() => {
    // simulate async fetch
    let timer: ReturnType<typeof setTimeout>;
    (async () => {
      timer = setTimeout(() => {
        setData(indexHeroData);
        setLoading(false);
      }, 1000);
    })();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return { loading, data };
};
