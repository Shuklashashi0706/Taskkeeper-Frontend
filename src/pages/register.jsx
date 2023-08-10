import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { server } from "../main";
import toast from "react-hot-toast";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/users/api/v1/new`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers":
              "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods": "OPTIONS,POST",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
    } catch (error) {
      toast.error("Some error");
      console.log(error);
    }
  };
  return (
    <div className="login">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
          <h4>Or</h4>
          <Link to={"/login"}>Login</Link>
        </form>
      </section>
    </div>
  );
};

export default Register;
