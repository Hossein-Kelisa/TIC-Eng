import { useMemo, useState } from "react";
import { LoadingContext } from "../utils/loadingUtils";

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const withLoading = async (fnOrPromise) => {
    setLoading(true);
    try {
      if (typeof fnOrPromise === "function") {
        return await fnOrPromise();
      }
      return await fnOrPromise;
    } finally {
      setLoading(false);
    }
  };

  const value = useMemo(() => ({ loading, setLoading, withLoading }), [loading]);

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}
