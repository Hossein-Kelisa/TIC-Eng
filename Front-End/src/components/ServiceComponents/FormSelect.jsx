export default function FormSelect({ name, value, onChange, options }) {
  return (
    <div className="form-group">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="request-form__select"
      >
        <option value="">Select Service</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
