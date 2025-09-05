import { useState } from "react";
import { createRequest } from "../../services/requestService";
import "./RequestForm.css";

export default function RequestForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "testing",
    message: "",
    phone: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) data.append(key, value);
    });

    try {
      await createRequest(data);
      setSuccess("✅ Request submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "testing",
        message: "",
        phone: "",
        file: null,
      });
    } catch (err) {
      setError(err.message || "❌ Failed to submit request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="request-form">
      <h2 className="request-form__title">Service Request Form</h2>

      {error && <p className="request-form__error">{error}</p>}
      {success && <p className="request-form__success">{success}</p>}

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="request-form__input"
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="request-form__input"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="request-form__input"
      />

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        className="request-form__input"
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="request-form__select"
      >
        <option value="">Select Service</option>
        <option value="testing">Testing</option>
        <option value="inspection">Inspection</option>
        <option value="certification">Certification</option>
      </select>

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="request-form__textarea"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="request-form__input"
      />
    
      <input
        type="file"
        name="file"
        accept="application/pdf"
        onChange={handleChange}
        className="request-form__file"
      />

      <button
        type="submit"
        disabled={loading}
        className="request-form__button"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
