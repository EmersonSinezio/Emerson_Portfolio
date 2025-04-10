import { Navigate } from "react-router-dom";
import Mensages from "../components/Mensages";

const Admin = () => {
  const senha = prompt("admin");
  if (senha !== "admin") {
    return <Navigate to="/404" />;
  }
  return <Mensages />;
};

export default Admin;
