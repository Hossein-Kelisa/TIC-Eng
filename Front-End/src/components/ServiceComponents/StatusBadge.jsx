export default function StatusBadge({ status }) {
  if (!status) return <span className="status status--unknown">Unknown</span>;

  return (
    <span className={`status status--${status.toLowerCase()}`}>
      {status}
    </span>
  );
}
