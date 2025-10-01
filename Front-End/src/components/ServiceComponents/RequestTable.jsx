// src/components/ServiceComponents/RequestTable.jsx
import RequestRow from "./RequestRow";
import "./RequestTable.css";

export default function RequestTable({ requests, onStatusChange }) {
  return (
    <div className="request-list__table-container">
      {requests.length === 0 ? (
        <p className="request-list__empty">No requests found</p>
      ) : (
        <table className="request-list__table">
          <thead>
            <tr>
              <th>Date</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Service</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Status</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <RequestRow
                key={req._id}
                request={req}
                onStatusChange={onStatusChange}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
