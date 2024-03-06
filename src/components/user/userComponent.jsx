import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";

const User = () => {

  const [message, setMessage] = useState("");
  const { jwtToken } = useAuth(); // Access JWT token from context

  useEffect(() => {
    axios
      .get("http://localhost:9090/forUser" , {

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
        <h2>Welcome to the User Page</h2>
        <p>This is your user content. Customize it as needed!</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default User;
