import Fades from "../RestComponents/Fades";
import { FaFilePdf } from "react-icons/fa";
import "./DownloadForms.css";
import { useTranslation } from "react-i18next";

function DownloadForms() {
  const { t } = useTranslation();

  return (
    <section id="download-forms" className="download-forms-section">
      <div className="download-forms">
        <Fades animationType="fadeZoom">
          <h4>{t("download_forms.title")}</h4>
        </Fades>
        <Fades animationType="fadeUp">
          <p className="download-subtitle">
            {t("download_forms.subtitle")}
          </p>
        </Fades>
        <div className="download-buttons">
          <Fades animationType="fadeLeft">
            <a href="/Forms/1.pdf" download className="download-btn">
              {t("download_forms.first_form")} <FaFilePdf />
            </a>
          </Fades>
          <Fades animationType="fadeRight">
            <a href="/Forms/2.pdf" download className="download-btn">
              {t("download_forms.second_form")} <FaFilePdf />
            </a>
          </Fades>
        </div>
      </div>
    </section>
  );
}

export default DownloadForms;
