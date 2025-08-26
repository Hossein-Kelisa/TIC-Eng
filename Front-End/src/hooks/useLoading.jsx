import { useContext } from "react";
import { LoadingContext } from "../utiles/loadingUtiles";

export function useLoading() {
  return useContext(LoadingContext);
}