import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [jwtToken, setJwtToken] = useState('');

  const login = (response) => {
    setRoles(response.user.role);
    setJwtToken(response.jwtToken);
  };

  const logout = () => {
    setRoles([]);
    setJwtToken('');
  };

  return (
    <AuthContext.Provider value={{ roles, jwtToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};