import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [jwtToken, setJwtToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userRole, setUserRole] = useState(""); // New state for user role

  const login = (response) => {
    setRoles(response.user.role);
    setJwtToken(response.jwtToken);
    setIsLoggedIn(true); 
    setUserRole(response.user.role[0].roleName); // Set user's role upon login
  };

  const logout = () => {
    setRoles([]);
    setJwtToken("");
    setIsLoggedIn(false);
    setUserRole(""); // Clear user's role upon logout
  };

  return (
    <AuthContext.Provider
      value={{ roles, jwtToken, isLoggedIn, userRole, login, logout }} 
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
