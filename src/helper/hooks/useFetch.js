import { useEffect, useState } from "react";

export const useFetch = (fetchFunction, params) => {
  const [data, setData] = useState(null);
  const [isLoad, setIsLoad] = useState(true);
  const [error, setError] = useState(null);
  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoad(true);
        const result = await fetchFunction(params);
        setData(result);
      } catch (error) {
        setIsLoad(false);
        setError(false);
      } finally {
        setIsLoad(false);
      }
    })();
  }, [fetchFunction, stringParams]);

  return { data, isLoad, error };
};
