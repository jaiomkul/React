import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const { handelAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <input type="email" />
      <input type="password" />
      <button
        onClick={() => {
          handelAuth(true);
          navigate("/", { replace: true });
        }}
      >
        Submit
      </button>
    </div>
  );
};
