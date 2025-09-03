import { useState } from "react";
import "./RequestForm.css";

function RequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    phone: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (file) data.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/api/requests", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        alert("Request submitted successfully ✅");
      } else {
        alert("Something went wrong ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <section id="request-form" className="request-form-section">
      <h3 className="request-form-title">Request a Service</h3>
      <form onSubmit={handleSubmit} className="request-form">
        <input
          className="request-form-input"
          type="text"
          name="first name"
          placeholder="Your First Name"
          required
          onChange={handleChange}
        />

        <input
          className="request-form-input"
          type="text"
          name="last name"
          placeholder="Your Last Name"
          required
          onChange={handleChange}
        />
        <input
          className="request-form-input"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
        />
        <input
          className="request-form-input"
          type="text"
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
        />
        <select
          className="request-form-select"
          name="service"
          required
          onChange={handleChange}
        >
          <option value="">Select Service</option>
          <option value="testing">Testing</option>
          <option value="inspection">Inspection</option>
          <option value="certification">Certification</option>
        </select>
        <textarea
          className="request-form-textarea"
          name="message"
          placeholder="Additional details..."
          onChange={handleChange}
        />
        <label htmlFor="file-upload" className="file-upload-box">
          <p>📄 Drag & drop your PDF here or click to browse</p>
        </label>
        <input
          id="file-upload"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          hidden
        />
        <input
          className="request-form-input"
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          required
          onChange={handleChange}
        />
        <button className="request-form-button" type="submit">
          Submit Request
        </button>
      </form>
    </section>
  );
}

export default RequestForm;
