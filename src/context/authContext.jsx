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
  const [userRole, setUserRole] = useState(); // New state for user role

  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (response) => {
    // const { user, jwtToken,} = response;
    // setUser(user);
    // setJwtToken(jwtToken);
    // setRoles(response.user.role[0].roleName);

    //setRoles(response.user.role);
    setJwtToken(response.jwtToken);
    setUserRole(response.user.role[0].roleName); // Set user's role upon login

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("jwtToken", response.jwtToken);
    localStorage.setItem("userRole", response.user.role[0].roleName);
  };

  const logout = () => {
    setUser({});
    setJwtToken("");
    localStorage.removeItem("user");
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userRole");
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
