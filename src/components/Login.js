import React, { useState } from "react";
import "../css/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Validate the username and password
    if (username === "admin" && password === "password") {
      // Login successful
      setError("");
      console.log("Logged in!");
    } else {
      // Login failed
      setError("Invalid username or password");
    }
  }

  return (
    <>
      <div className="login-flex-container">
        <div className="flex-item login-flex-item-1">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="form-control"
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"
            />
            <button type="submit" className="loginButton">
              Log in
            </button>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
