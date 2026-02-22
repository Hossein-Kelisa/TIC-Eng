# TIC Engineering Website

## 🌍 Website
https://tic-eng.com

## 🏢 Company Description
TIC Engineering is an international Testing, Inspection and Certification service platform based in Urmia, Iran.

The platform allows customers to:

- Register and login securely
- Download certification documents
- Fill service request forms
- Upload PDF attachments
- Send requests for Testing, Inspection or Certification services

The system includes an Admin Dashboard for managing customer requests and tracking service progress.

---

## ⭐ Features

### 👤 User Features
- Multi-language support (English / Persian / Dutch)
- Secure authentication using JWT
- PDF document download system
- Upload PDF files for service requests
- Cloud-based file storage

### 👨‍💼 Admin Features
- View customer requests
- Update request status
- Manage service workflow
- Monitor customer submissions

### 🌎 International Business Features
- Bilingual UI
- Professional corporate design
- Secure cloud storage

---

## 🛠 Technologies Used

### Frontend
- React.js
- Vite
- React Router
- Axios
- Framer Motion
- i18next + react-i18next (Multi-language)
- SweetAlert2
- Cloudinary (Image storage)

### Backend
- Node.js
- Express.js
- JWT Authentication
- MongoDB (Free Cloud Database)
- AWS S3 (PDF Storage)
- Nodemailer / SendGrid (Email services)

Security Middleware:
- Helmet
- CORS
- Express Rate Limit

---

## ☁️ Infrastructure & Deployment

| Service | Platform |
|---|---|
| Frontend | Netlify |
| Backend | Render |
| Domain | Namecheap |
| Database | MongoDB Atlas |
| Storage | AWS S3 |
| Images | Cloudinary |

---

## 📂 Project Structure

TIC-ENG
```
├── Front-End
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   └── assets
│
├── Back-End
│   ├── routes
│   ├── controllers
│   ├── models
│   ├── middleware
│   └── server.js
```

---

## 🚀 Installation & Running Locally

### Clone Repository
git clone https://github.com/Hossein-Kelisa/TIC-Eng
cd tic-eng

### Install Root Dependencies
npm install

### Run Project (Frontend + Backend Together)
npm run dev

This command runs:
- Frontend → Vite Development Server
- Backend → Nodemon Server

---

## 📦 Frontend Setup
cd Front-End
npm install
npm run dev

---

## 📦 Backend Setup
cd Back-End
npm install
npm run dev

---

## 🔐 Environment Variables

### Backend .env
PORT=
MONGO_URI=
JWT_SECRET=

AWS_ACCESS_KEY=
AWS_SECRET_KEY=
AWS_BUCKET_NAME=

SENDGRID_API_KEY=

CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=

---

## 👥 Authentication System
- JWT Token Authentication
- Role Based Access Control:
  - Admin
  - User

---

## 📧 Email Services
- Automated notification emails
- Customer request confirmation emails

---

## ⭐ Future Improvements
- Payment Gateway Integration
- AI Request Automation
- Advanced Analytics Dashboard
- Certification Tracking Automation

---

## 👨‍💻 Development Team
TIC Engineering Development Team

## 📞 Contact
📧 contact@tic-eng.com  
🌐 https://tic-eng.com

## 📜 License
Proprietary software — TIC Engineering
