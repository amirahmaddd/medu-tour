import { mockSpecialPlace } from "@/mock/data";
import { place } from "@/types/layout";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";

export const useSpecialFeature = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<place>();
  useEffect(() => {
    // simulate async fetch
    let timer: ReturnType<typeof setTimeout>;
    (async () => {
      timer = setTimeout(() => {
        setData(mockSpecialPlace);
        setLoading(false);
      }, 1000);
    })();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return { loading, data };
};
