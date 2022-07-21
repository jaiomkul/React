import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handelAuth = (state) => {
    setIsAuth(state);
  };
  return (
    <AuthContext.Provider value={{ isAuth, handelAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
