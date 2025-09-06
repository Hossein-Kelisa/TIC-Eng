import "./FormFileUpload.css";

export default function FormFileUpload({ name, onChange, accept }) {
  return (
    <div className="form-group">
      <input
        type="file"
        name={name}
        accept={accept}
        onChange={onChange}
        className="request-form__file"
      />
    </div>
  );
}
