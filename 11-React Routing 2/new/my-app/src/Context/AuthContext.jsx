import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handelAuth = (state) => {
    setIsAuth(state);
  };
  return <AuthContext.Provider value={0}>{children}</AuthContext.Provider>;
};
