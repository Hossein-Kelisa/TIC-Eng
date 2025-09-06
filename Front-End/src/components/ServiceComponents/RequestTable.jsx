import RequestRow from "./RequestRow";

export default function RequestTable({ requests }) {
  return (
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
            requests.map((req) => <RequestRow key={req._id} request={req} />)
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
  );
}
