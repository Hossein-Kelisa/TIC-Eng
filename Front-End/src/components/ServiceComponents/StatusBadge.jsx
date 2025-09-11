// src/components/ServiceComponents/StatusBadge.jsx
import PropTypes from "prop-types";
import { useState } from "react";
import "./StatusBadge.css";

const DEFAULT_STATUSES = ["Active", "Pending", "Failed", "Unknown"];

export default function StatusBadge({ status, onChange, editable = true, statuses = DEFAULT_STATUSES }) {
  const [editing, setEditing] = useState(false);
  const [pending, setPending] = useState(false);

  const current = status || "Unknown";
  const normalizedClass = (current || "unknown").toLowerCase().replace(/\s+/g, "-");

  const handleSelectChange = async (e) => {
    const newStatus = e.target.value;
    if (!onChange) {
      setEditing(false);
      return;
    }
    try {
      setPending(true);
      // if onChange returns a promise we await it; otherwise treat as sync
      const maybePromise = onChange(newStatus);
      if (maybePromise && maybePromise.then) {
        await maybePromise;
      }
      setEditing(false);
    } catch (err) {
      // let parent show error; keep editing so user can retry
      // optionally show a quick alert here (not doing to keep separation)
      console.error("Status update failed:", err);
    } finally {
      setPending(false);
    }
  };

  if (editing && editable) {
    return (
      <select
        className="status-select"
        value={current}
        onChange={handleSelectChange}
        onBlur={() => !pending && setEditing(false)}
        autoFocus
      >
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    );
  }

  return (
    <span
      className={`status status--${normalizedClass}`}
      onClick={() => editable && setEditing(true)}
      title={editable ? "Click to change status" : current}
      style={{ cursor: editable ? "pointer" : "default" }}
      aria-label={`Status: ${current}`}
    >
      {pending ? "..." : current.charAt(0).toUpperCase() + current.slice(1)}
    </span>
  );
}

StatusBadge.propTypes = {
  status: PropTypes.string,
  onChange: PropTypes.func, // (newStatus) => promise or sync
  editable: PropTypes.bool,
  statuses: PropTypes.array,
};
