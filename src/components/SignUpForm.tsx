import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PasswordStrength from "./PasswordStrength";

interface SignUpFormValues {
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values: SignUpFormValues) => {
    setSuccessMessage("Sign Up Successful!");
    console.log("Form submitted with values:", values);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form aria-label="Sign Up Form">
          {/* Email Field */}
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <Field type="email" id="email" name="email" style={styles.input} />
            <ErrorMessage name="email" component="div">
              {(msg) => <div style={styles.error}>{msg}</div>}
            </ErrorMessage>
          </div>

          {/* Password Field */}
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Password:
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              style={styles.input}
            />
            <ErrorMessage name="password" component="div">
              {(msg) => <div style={styles.error}>{msg}</div>}
            </ErrorMessage>
            {/* Password Strength Indicator */}
            <PasswordStrength password={values.password} />
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.submitButton}>
            Sign Up
          </button>

          {/* Success Message */}
          {successMessage && (
            <div style={styles.successMessage}>{successMessage}</div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;

const styles = {
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  successMessage: {
    color: "green",
    fontSize: "14px",
    marginTop: "10px",
  },
};
