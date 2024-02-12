import { Outlet, Navigate } from "react-router-dom";
import { LoginPage } from "../pages";

const PrivateRoutes = () => {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to={<LoginPage />} />;
};

export default PrivateRoutes;
