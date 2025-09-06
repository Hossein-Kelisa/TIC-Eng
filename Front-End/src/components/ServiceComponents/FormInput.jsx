export default function FormInput({ type, name, value, onChange, placeholder, required }) {
  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="request-form__input"
      />
    </div>
  );
}
