import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Login</h1>
        <LoginForm />
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Don't have an account? <a href="/signup" style={{ color: "#007bff" }}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

