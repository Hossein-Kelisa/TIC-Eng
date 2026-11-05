import "./FormSelect.css";
import { useTranslation } from "react-i18next";
export default function FormSelect({ name, value, onChange, options }) {
  const { t } = useTranslation();
  return (
    <div className="form-group">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="request-form__select"
      >
        <option value="">{t("serviceRequest.formSelectService")}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
