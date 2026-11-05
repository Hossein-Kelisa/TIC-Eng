import { useState } from "react";
import "./FormFileUpload.css";
import { useTranslation } from "react-i18next";

export default function FormFileUpload({ name, onChange, accept }) {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const { t } = useTranslation();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      onChange && onChange({ target: { name, files: e.dataTransfer.files } });
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      onChange && onChange(e);
    }
  };

  return (
    <div
      className={`file-upload ${dragActive ? "file-upload--active" : ""}`}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="file-upload-input"
        name={name}
        accept={accept}
        onChange={handleChange}
        className="file-upload__input"
      />
      <label htmlFor="file-upload-input" className="file-upload__label">
        {fileName ? (
          <span>{fileName}</span>
        ) : (
          <span> {t("serviceRequest.dragAndDrop")} <u>{t("serviceRequest.clickToBrowse")}</u></span>
        )}
      </label>
    </div>
  );
}
