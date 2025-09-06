import "./FormButton.css";

export default function FormButton({ loading }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="request-form__button"
    >
      {loading ? "Submitting..." : "Submit"}
    </button>
  );
}
