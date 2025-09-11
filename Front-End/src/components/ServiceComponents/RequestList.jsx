// src/components/ServiceComponents/RequestList.jsx
import { useEffect, useState } from "react";
import { getRequests, updateRequestStatus } from "../../services/requestService";
import RequestTable from "./RequestTable";
import Swal from "sweetalert2";
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
        const result = await getRequests();
        // if service returns { data: [...] } or the array directly
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

  // handle status change from child components
  const handleStatusChange = async (requestId, newStatus) => {
    // find old status to revert if needed
    const oldStatus = requests.find((r) => r._id === requestId)?.status || "Unknown";

    // optimistic UI update
    setRequests((prev) =>
      prev.map((r) => (r._id === requestId ? { ...r, status: newStatus } : r))
    );

    try {
      await updateRequestStatus(requestId, newStatus);
      // optional small success toast
      Swal.fire({
        icon: "success",
        title: "Status updated",
        showConfirmButton: false,
        timer: 900,
      });
    } catch (err) {
      // revert on error
      setRequests((prev) =>
        prev.map((r) => (r._id === requestId ? { ...r, status: oldStatus } : r))
      );
      Swal.fire({
        icon: "error",
        title: "Update failed",
        text: err.response?.data?.message || err.message || "Could not update status.",
      });
    }
  };

  if (loading) return <p className="request-list__loading">Loading...</p>;
  if (error) return <p className="request-list__error">{error}</p>;

  return (
    <div className="request-list">
      <h2 className="request-list__title">Service Requests</h2>
      <RequestTable requests={requests} onStatusChange={handleStatusChange} />
    </div>
  );
}
