// src/components/ServiceComponents/RequestRow.jsx
import StatusBadge from "./StatusBadge";
import { format } from "date-fns";
import "./RequestRow.css";

export default function RequestRow({ request, onStatusChange }) {
  let dateLabel = "N/A";
  if (request.createdAt) {
    const d = new Date(request.createdAt);
    if (!isNaN(d.getTime())) {
      try {
        dateLabel = format(d, "dd/MM/yyyy");
      } catch {
        dateLabel = d.toLocaleDateString();
      }
    }
  }

  const truncate = (text, max = 30) =>
    text && text.length > max ? `${text.slice(0, max)}...` : text || "—";

  return (
    <tr>
      <td>{dateLabel}</td>
      <td>{request.firstName}</td>
      <td>{request.lastName}</td>
      <td title={request.company}>{truncate(request.company)}</td>
      <td title={request.email}>{truncate(request.email, 25)}</td>
      <td>{request.service}</td>
      <td>{request.phone}</td>
      <td title={request.message}>{truncate(request.message, 50)}</td>
      <td>
        <StatusBadge
          status={request.status}
          onChange={(newStatus) => onStatusChange(request._id, newStatus)}
        />
      </td>
      <td>
        {request.fileUrl ? (
          <a
            href={request.fileUrl}
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
  );
}
