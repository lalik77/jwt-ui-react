import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ProtectedRoute = ({ roles, ...rest }) => {
  const { jwtToken, userRole } = useAuth();

  // Check if the user is authenticated
  console.log("Checking authentication...");

  // Check if the user is authenticated
  if (!jwtToken) {
    // If not authenticated, redirect to the login page
    console.log("User not authenticated. Redirecting to login page.");
    console.log("First statment : !jwtToken : " + localStorage);
    return <Navigate to="/login" />;
  }

  // Check if the route requires specific roles
  if (roles && roles.length > 0 && !roles.includes(userRole)) {
    // If the user's role does not match the required roles, redirect to the forbidden page
    console.log("User does not have required role. Redirecting to forbidden page.");
    console.log("second statment : " + localStorage.getItem("jwtToken"));
    return <Navigate to="/forbidden" />;
  }

  // If authenticated and authorized, render the child routes
  return <Outlet />;
};
