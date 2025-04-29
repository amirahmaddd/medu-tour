import { stateList } from "@/mock/data";
import { State, StateCategory } from "@/types/places";
import { useEffect, useState } from "react";

export const useAllStates = () => {
  const [loading, setLoading] = useState(true);
  const [states, setStates] = useState<State[]>([]);
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [category, setCategory] = useState<StateCategory>(
    StateCategory.HISTORICAL
  );

  const nextPage = () => {
    if (offset + limit < totalItems) {
      setOffset((prev) => prev + limit);
    }
  };

  const prevPage = () => {
    if (offset - limit >= 0) {
      setOffset((prev) => prev - limit);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await new Promise<State[]>((resolve) => {
          setTimeout(() => {
            const filteredByCategory = stateList.filter((state) =>
              state.category.includes(category)
            );

            // فیلتر کردن بر اساس offset و limit
            const paginatedData = filteredByCategory.slice(
              offset,
              offset + limit
            );

            setTotalItems(filteredByCategory.length);
            resolve(paginatedData);
          }, 1000);
        });
        setStates(response);
      } catch (error) {
        console.error("خطا در دریافت اطلاعات:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [offset, limit, category, stateList]);

  return {
    states,
    loading,
    category,
    nextPage,
    prevPage,
    setCategory,
    hasNextPage: offset + limit < totalItems,
    hasPrevPage: offset > 0,
  };
};
