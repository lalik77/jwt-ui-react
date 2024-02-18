import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [roles, setRoles] = useState(
    JSON.parse(localStorage.getItem("roles")) || {}
  );
  const [jwtToken, setJwtToken] = useState(
    localStorage.getItem("jwtToken") || ""
  );
  const isLoggedIn = !!jwtToken;
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || "");   

  console.log("AuthContext#jwtToken: " + jwtToken);
  console.log("AuthContext#userRole: " + userRole);
  console.log("------------------------------------AuthContext#Block#Finish:------------------------------------");

  const login = (response) => {    
    setJwtToken(response.jwtToken);
    setUserRole(response.user.role[0].roleName); // Set user's role upon login    
    localStorage.setItem("jwtToken", response.jwtToken);
    localStorage.setItem("userRole", response.user.role[0].roleName);
  };

  const logout = () => {   
    setJwtToken("");    
    setUserRole("");    
    localStorage.clear();
  };

  // Load userRole from localStorage on initial render
  useEffect(() => {
    const storedUserRole = localStorage.getItem("userRole");    
    if (storedUserRole) {
      setUserRole(storedUserRole);
    }   
  }, []);

  return (
    <AuthContext.Provider
      value={{ roles, userRole, user, jwtToken, isLoggedIn, login, logout }}
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
