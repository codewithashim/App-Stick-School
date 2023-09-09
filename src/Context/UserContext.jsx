/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import jwtDecode from "jwt-decode";

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
   try {
    if (typeof localStorage !== "undefined") {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          const decodedToken = jwtDecode(accessToken);
          setUser(decodedToken);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setUser(null);
    }
   } catch (error) {
      console.log(error)
   }
  }, []);

  const userInfo = {
    user,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
