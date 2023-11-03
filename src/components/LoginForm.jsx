import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForms = (props) => {
  const [username, setUsername] = useState("");
  const profileName = "firstUser";
  const securityCode = "12345678";
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(username, password);
    handleProfileChange();
  };
  const handleProfileChange = (e) => {
    if (profileName === username && securityCode === password) {
      navigate("/transactions");
    } else {
        alert("Invalid username or password");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleProfileChange} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForms;
