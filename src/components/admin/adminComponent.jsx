import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";

const Admin = () => {
  const [message, setMessage] = useState("");
  const { jwtToken } = useAuth(); // Access JWT token from context

  useEffect(() => {
    axios
      .get("http://localhost:9090/forAdmin" , {

      headers: {
        Authorization : `Bearer ${jwtToken}`
      }}     
      )
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="card text-center" style={{ padding: "20px" }}>
        <h2>Welcome to the Admin Page</h2>
        <p>This is your admin content. Customize it as needed!</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Admin;
