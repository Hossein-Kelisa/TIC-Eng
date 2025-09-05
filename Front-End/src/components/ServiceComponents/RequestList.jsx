import { useEffect, useState } from "react";
import { getRequests } from "../../services/requestService";
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
      <div className="request-list__table-container">
        <table className="request-list__table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Phone</th>
              <th>Status</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((req) => (
                <tr key={req._id}>
                  <td>{req.firstName}</td>
                  <td>{req.lastName}</td>
                  <td>{req.email}</td>
                  <td>{req.service}</td>
                  <td>{req.phone}</td>
                  <td>
                    <span
                      className={`status status--${req.status?.toLowerCase()}`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td>
                    {req.fileUrl ? (
                      <a
                        href={req.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="request-list__link"
                      >
                        View PDF
                      </a>
                    ) : (
                      <span className="request-list__no-file">No file</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="request-list__empty">
                  No requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
