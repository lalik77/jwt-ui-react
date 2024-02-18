import React from "react";
import Header from "./components/header/headerComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/homeComponent";
import Admin from "./components/admin/adminComponent";
import User from "./components/user/userComponent";
import Login from "./components/login/loginComponent";
import { AuthProvider } from "./context/authContext";
import Forbidden from "./components/forbidden/forbiddenComponent";
import { ProtectedRoute } from "./utils/protectedRoute";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route element={<ProtectedRoute roles={["Admin"]} />}>
              <Route path="/admin" element={<Admin />} />
            </Route>

            <Route element={<ProtectedRoute roles={["User"]} />}>
              <Route path="/user" element={<User />} />
            </Route>           

            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forbidden" element={<Forbidden />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
