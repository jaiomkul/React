import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

export const PrivateComponent = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return children;
};
