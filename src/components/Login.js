import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Login() {
  const signUpData = useSelector((state) => state.signUp.signUp[0]);
  console.log("signup data", signUpData);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      if (
        signUpData.email === values.email &&
        signUpData.password === values.password
      ) {
        history.push("/recipes");
      }
    },
  });

  return (
    <>
      <h1 className="d-flex align-items-center justify-content-center">
        Login
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="signUpDiv">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div className="signUpDiv">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>

        <div className="signUpDiv">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Login;
