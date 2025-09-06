import { useState } from "react";
import { createRequest } from "../../services/requestService";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import FormFileUpload from "./FormFileUpload";
import FormButton from "./FormButton";
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

      <FormInput
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <FormInput
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <FormInput
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FormInput
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
      />

      <FormSelect
        name="service"
        value={formData.service}
        onChange={handleChange}
        options={[
          { value: "testing", label: "Testing" },
          { value: "inspection", label: "Inspection" },
          { value: "certification", label: "Certification" },
        ]}
      />

      <FormTextarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      />

      <FormInput
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <FormFileUpload
        name="file"
        onChange={handleChange}
        accept="application/pdf"
      />

      <FormButton loading={loading} />
    </form>
  );
}
