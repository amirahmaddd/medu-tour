import { IndexFeatureData } from "@/mock/data";
import { IndexFeatureType } from "@/types/layout";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";

export const useIndexFeature = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IndexFeatureType>();
  useEffect(() => {
    // simulate async fetch
    let timer: ReturnType<typeof setTimeout>;
    (async () => {
      timer = setTimeout(() => {
        setData(IndexFeatureData);
        setLoading(false);
      }, 1000);
    })();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return { loading, data };
};
