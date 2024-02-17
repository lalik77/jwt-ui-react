import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/authContext"; // Import useAuth hook
import { useNavigate } from "react-router-dom";

const Login = () => {
  const PATH_OF_API = "http://localhost:9090";

  const { login } = useAuth(); // Use useAuth hook to access context
  const navigate = useNavigate(); // Get the history object from react-router-dom

  const [formData, setFormData] = useState({
    userName: "",
    userPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Username: ${formData.userName}, Password: ${formData.userPassword}`
    );

    axios
      .post(PATH_OF_API + "/authenticate", formData)
      .then((response) => {
        login(response.data); // Call login function from context
        console.log("----------------------------------");
        console.log("LoginComponent#response.data");
        console.log(response.data);

        // Check if the user is an admin
        const isAdmin = response.data.user.role[0].roleName.includes("Admin");
        const isUser = response.data.user.role[0].roleName.includes("User");

        if (isAdmin) {
          // Redirect to the admin route
          console.log("LoginComponent#isAdmin is :" + isAdmin);
          navigate("/admin");
        } else if (isUser) {
          // Redirect to the admin route
          console.log("LoginComponent#isUser is :" + isUser);
          navigate("/user");
        } else {
          console.log('isAdmin is :" + !isAdmin');
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="card" style={{ padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Enter your username"
            className="form-control mb-3"
            value={formData.userName}
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="userPassword"
            id="userPassword"
            placeholder="Enter your password"
            className="form-control mb-3"
            value={formData.userPassword}
            onChange={handleInputChange}
          />

          <input
            type="submit"
            value="Login"
            className="btn btn-outline-primary form-control rounded-0"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
