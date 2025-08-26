import { useContext } from "react";
import { LoadingContext } from "../utiles/loadingUtiles";

export default function useLoading() {
  return useContext(LoadingContext);
}