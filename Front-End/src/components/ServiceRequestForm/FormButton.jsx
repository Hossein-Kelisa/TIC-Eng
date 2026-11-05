import "./FormButton.css";
import { useTranslation } from "react-i18next";

export default function FormButton({ loading }) {
  const { t } = useTranslation();

  return (
    <button type="submit" disabled={loading} className="request-form__button">
      {loading ? t("serviceRequest.submitLoading") : t("serviceRequest.submit")}
    </button>
  );
}
