
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ya from '../assets/icon.png';
import './Login.css';

export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }

    if (json.success) {
      console.log("User Login Success");
      navigate("/Display");
    }
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '120vh' }}>
        <form onSubmit={handleSubmit} className="bg" >
        
        <div className="text-center mb-4">
            <img src={ya} alt="Avatar" className="avatar" />
        </div>
        <h1 style={{textAlign: "center" }}>Sign In </h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
              id="exampleInputPassword1"
            />
          </div>

          <div className="text-center  ">
             <Link to="#forgot-password">Forgot your password</Link>
         </div>

          <button type="submit" className="m-3 btn btn-success">
            Login
          </button>
          <Link to="/newUser" className="m-3 btn btn-danger">
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
}
