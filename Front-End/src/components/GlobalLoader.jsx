import { useLoading } from "../hooks/useLoading";
import "./GlobalLoader.css";

export function GlobalLoader() {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="global-loader">
      <div className="spinner"></div>
    </div>
  );
}
