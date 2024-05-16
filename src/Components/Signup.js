import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [confirm, setConfirm] = useState();

  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_KEY;
  console.log(url);
  const signUpHandle = async () => {
    if (password != confirm) return;
    let result = await fetch(`${url}/signup`, {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    navigate("/login");
    console.log(result);
  };

  return (
    <div>
      <h1>SignUp Page</h1>
      <div>
        <div>
          <label>UserName</label>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="text"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        <div>
          <button type="button" onClick={signUpHandle}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
