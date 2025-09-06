import { useEffect, useState } from "react";
import { getRequests } from "../../services/requestService";
import RequestTable from "./RequestTable";
import "./RequestList.css";

export default function RequestList() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");
      try {
        const result = await getRequests(); // reads token from localStorage
        const dataArray = Array.isArray(result) ? result : result.data || [];
        setRequests(dataArray);
      } catch (err) {
        setError(err.message || "Failed to load requests.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="request-list__loading">Loading...</p>;
  if (error) return <p className="request-list__error">{error}</p>;

  return (
    <div className="request-list">
      <h2 className="request-list__title">Service Requests</h2>
      <RequestTable requests={requests} />
    </div>
  );
}
