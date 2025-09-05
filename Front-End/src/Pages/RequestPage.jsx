import RequestForm from "../components/ServiceComponents/RequestForm";

export default function RequestPage() {
  return (
    <div id= "RequestForm">
      <RequestForm />
    </div>
  );
}


//         <label htmlFor="file-upload" className="file-upload-box">
//           <p>📄 Drag & drop your PDF here or click to browse</p>
//         </label>
//         <input
//           id="file-upload"
//           type="file"
//           accept="application/pdf"
//           onChange={handleFileChange}
//           hidden
//         />