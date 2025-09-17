import { Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react"; 

export default function DashboardButton() {
  return (
    <Link to="/dashboard">
      <LayoutDashboard />
    </Link>
  );
}