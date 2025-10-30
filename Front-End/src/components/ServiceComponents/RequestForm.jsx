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
import { useTranslation } from "react-i18next";

export default function RequestForm() {
  const navigate = useNavigate();
  // const { user, token } = useContext(AuthContext);  // if authentication is needed**
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();
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
        title: t("serviceRequest.submitLoading"),
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      // await createRequest(data, token);    // if authentication is needed**
      await createRequest(data);

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
        title: t("serviceRequest.submitSuccess"),
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
        title: t("serviceRequest.submitErrorTitle"),
        text: err.message || t("serviceRequest.submitErrorDefault"),
        confirmButtonText: t("serviceRequest.submitErrorConfirm"),
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
      <h2 className="request-form__title">{t("serviceRequest.formTitle")}</h2>

      {/* when user : is logged in ** */}

      {/* <FormInput
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

      <FormInput type="email" name="email" value={user?.email || ""} readOnly /> */}

      {/* when remove : user is logged in ** */}

      <FormInput
        type="text"
        name="firstName"
        placeholder={t("serviceRequest.formFirstName")}
        value={user ? user.firstName : formData.firstName || ""}
        onChange={!user ? handleChange : undefined}
        readOnly={!!user}
      />

      <FormInput
        type="text"
        name="lastName"
        placeholder={t("serviceRequest.formLastName")}
        value={user ? user.lastName : formData.lastName || ""}
        onChange={!user ? handleChange : undefined}
        readOnly={!!user}
      />

      <FormInput
        type="email"
        name="email"
        placeholder={t("serviceRequest.formEmail")}
        value={user ? user.email : formData.email || ""}
        onChange={!user ? handleChange : undefined}
        readOnly={!!user}
      />

      <FormInput
        type="text"
        name="company"
        placeholder={t("serviceRequest.formCompany")}
        value={formData.company}
        onChange={handleChange}
        required
      />

      <FormSelect
        name="service"
        value={formData.service}
        onChange={handleChange}
        options={[
          { value: "testing", label: t("serviceRequest.formTesting") },
          { value: "inspection", label: t("serviceRequest.formInspection") },
          {
            value: "certification",
            label: t("serviceRequest.formCertification"),
          },
        ]}
        required
      />

      <FormTextarea
        name="message"
        placeholder={t("serviceRequest.formMessage")}
        value={formData.message}
        onChange={handleChange}
      />

      <FormInput
        type="text"
        name="phone"
        placeholder={t("serviceRequest.formPhone")}
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
