import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const initialValues: LoginFormValues = {
    email: localStorage.getItem("rememberedEmail") || "",
    password: "",
    rememberMe: localStorage.getItem("rememberedEmail") ? true : false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values: LoginFormValues) => {
    if (values.rememberMe) {
      localStorage.setItem("rememberedEmail", values.email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
    setSuccessMessage("Login Successful!");
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form aria-label="Login Form">
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" aria-describedby="emailError" />
          <ErrorMessage name="email" component="div" id="emailError" className="error" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" aria-describedby="passwordError" />
          <ErrorMessage name="password" component="div" id="passwordError" className="error" />
        </div>

        <div>
          <label style={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
            <Field type="checkbox" name="rememberMe" />
            <span style={{ marginLeft: "8px" }}>Remember Me</span>
          </label>
        </div>

        <button type="submit">Login</button>

        {successMessage && <div style={{ color: "green", marginTop: "10px" }}>{successMessage}</div>}
      </Form>
    </Formik>
  );
};

export default LoginForm;


