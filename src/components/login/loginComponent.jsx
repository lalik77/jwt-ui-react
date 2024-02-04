import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const PATH_OF_API = "http://localhost:9090";

  const [formData, setFormData] = useState({
    userName: '',
    userPassword:'',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
    
    // // Log the entered username and password
    // console.log(
    //   `Username: ${formData.userName}, Password: ${formData.userPassword}`
    // );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the entered username and password before send request
    console.log(
      `Username: ${formData.userName}, Password: ${formData.userPassword}`
    );

    axios
      .post(PATH_OF_API + '/authenticate', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="card" style={{ padding: '20px' }}>
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
