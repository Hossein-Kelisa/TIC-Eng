// src/components/ServiceComponents/RequestTable.jsx
import RequestRow from "./RequestRow";
import "./RequestTable.css";

export default function RequestTable({ requests, onStatusChange }) {
  return (
    <div className="request-list__table-container">
      <table className="request-list__table">
        <thead>
          <tr>
            <th>Date</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Status</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((req) => (
              <RequestRow
                key={req._id}
                request={req}
                onStatusChange={onStatusChange}
              />
            ))
          ) : (
            <tr>
              <td colSpan="9" className="request-list__empty">
                No requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
