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
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function RequestForm() {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    company: "",
    service: "",
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
    data.append("firstName", user?.firstName || "");
    data.append("lastName", user?.lastName || "");
    data.append("email", user?.email || "");

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

      await createRequest(data, token);

      // Clear form
      setFormData({
        company: "",
        service: "",
        message: "",
        phone: "",
        file: null,
      });

      // Close loading and show success
      Swal.close();

      // Success toast (non-blocking)
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Request submitted successfully",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: "#f0fdf4", // light green
        color: "#166534", // dark green text
      });

      navigate("/"); // Go to home after OK
    } catch (err) {
      console.error("Request submission error:", err);

      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: err.message || "Failed to submit request.",
        confirmButtonText: "OK",
        confirmButtonColor: "#dc2626",
        background: "#fef2f2",
        color: "#991b1b",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="request-form">
      <h2 className="request-form__title">Service Request Form</h2>

      <FormInput
        type="text"
        name="firstName"
        value={user?.firstName || ""}
        readOnly
      />

      <FormInput
        type="text"
        name="lastName"
        value={user?.lastName || ""}
        readOnly
      />

      <FormInput type="email" name="email" value={user?.email || ""} readOnly />

      <FormInput
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        required
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
        required
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
