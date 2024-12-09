import React from "react";
import SignUpForm from "../components/SignUpForm";

const SignUpPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Sign Up</h1>
        <SignUpForm />
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Already have an account? <a href="/login" style={{ color: "#007bff" }}>Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;

