export default function FormTextarea({ name, value, onChange, placeholder }) {
  return (
    <div className="form-group">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="request-form__textarea"
      />
    </div>
  );
}
