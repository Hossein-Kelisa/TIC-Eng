import { useState } from "react";
import { createRequest } from "../services/requestService";

export default function RequestForm() {
  const [formData, setFormData] = useState({
    name: "",
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
        name: "",
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
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-xl font-bold text-center">Service Request Form</h2>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="testing">Testing</option>
        <option value="inspection">Inspection</option>
        <option value="certification">Certification</option>
      </select>

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />

      <input
        type="file"
        name="file"
        accept="application/pdf"
        onChange={handleChange}
        className="w-full"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
