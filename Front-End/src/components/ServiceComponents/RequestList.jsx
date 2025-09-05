import { useEffect, useState } from "react";
import { getRequests } from "../../services/requestService";


export default function RequestList() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");
      try {
        const result = await getRequests(); //reads token from localStorage
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

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="request-list-container">
      <h2>All Service Requests</h2>
      <table className="request-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Phone</th>
            <th>Status</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          {(requests || []).map((req) => (
            <tr key={req._id}>
              <td>{req.firstName}</td>
              <td>{req.lastName}</td>
              <td>{req.email}</td>
              <td>{req.service}</td>
              <td>{req.phone}</td>
              <td>{req.status}</td>
              <td>
                {req.fileUrl ? (
                  <a href={req.fileUrl} target="_blank" rel="noopener noreferrer">
                    View PDF
                  </a>
                ) : (
                  "No file"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
