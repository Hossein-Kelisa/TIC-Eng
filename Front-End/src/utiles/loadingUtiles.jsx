import { createContext } from "react";

export const LoadingContext = createContext({
  loading: false,
  setLoading: () => {},
  withLoading: async (fnOrPromise) => fnOrPromise,
});