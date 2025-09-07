import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createRequest } from "../../services/requestService";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import FormFileUpload from "./FormFileUpload";
import FormButton from "./FormButton";
import Swal from "sweetalert2";
import "./RequestForm.css";

export default function RequestForm() {
  const navigate = useNavigate();
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) data.append(key, value);
    });

    try {
      // Show SweetAlert2 loading
      Swal.fire({
        title: "Submitting...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      await createRequest(data);

      // Clear form
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

      setLoading(false); // stop internal state loading

      // Close loading and show success
      Swal.close();
      await Swal.fire({
        title: "Success!",
        text: "Your request has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/"); // Go to home after OK
    } catch (err) {
      console.error("Request submission error:", err);
      setLoading(false); // stop internal state loading

      Swal.close();
      await Swal.fire({
        title: "Error!",
        text: err.message || "Failed to submit request.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="request-form">
      <h2 className="request-form__title">Service Request Form</h2>

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
