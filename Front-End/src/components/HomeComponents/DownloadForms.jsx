import Fades from "../RestComponents/Fades";
import { FaFilePdf } from "react-icons/fa";
import "./DownloadForms.css";

function DownloadForms() {
  return (
    <section id="download-forms" className="download-forms-section">
      <div className="download-forms">
        <Fades animationType="fadeZoom">
          <h4>Download Services Request Forms</h4>
        </Fades>
        <Fades animationType="fadeUp">
          <p className="download-subtitle">
            Download the forms you need for our services.
          </p>
        </Fades>
        <div className="download-buttons">
          <Fades animationType="fadeLeft">
            <a href="/Forms/1.pdf" download className="download-btn">
              Joosh form <FaFilePdf />
            </a>
          </Fades>
          <Fades animationType="fadeRight">
            <a href="/Forms/2.pdf" download className="download-btn">
              Makhzan form <FaFilePdf />
            </a>
          </Fades>
        </div>
      </div>
    </section>
  );
}

export default DownloadForms;
