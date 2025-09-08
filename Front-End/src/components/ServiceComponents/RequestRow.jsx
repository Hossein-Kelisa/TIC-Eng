import StatusBadge from "./StatusBadge";

export default function RequestRow({ request }) {
  return (
    <tr>
      <td>
        {request.createdAt && !isNaN(new Date(request.createdAt).getTime())
          ? new Date(request.createdAt).toLocaleDateString()
          : "N/A"}
      </td>
      <td>{request.firstName}</td>
      <td>{request.lastName}</td>
      <td>{request.email}</td>
      <td>{request.service}</td>
      <td>{request.phone}</td>
      <td>{request.message}</td>
      <td>
        <StatusBadge status={request.status} />
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
