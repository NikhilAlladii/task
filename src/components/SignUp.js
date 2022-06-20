import React from "react";
import { useDispatch } from "react-redux";

import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import "./SignUp.css";
import { ActionTypes } from "../redux/contants/action-types";

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      last_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch({
        type: ActionTypes.ADD_SIGNUP,
        payload: values,
      });

      values && history.push("/login");
    },
  });

  return (
    <div className="App">
      <h1 className="d-flex align-items-center justify-content-center">
        Sign Up
      </h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="signUpDiv">
          <label>Firts Name</label>
          <input
            type="text"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
          />
          {formik.errors.full_name && formik.touched.full_name && (
            <p>{formik.errors.first_name}</p>
          )}
        </div>
        <div className="signUpDiv">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
          />
          {formik.errors.full_name && formik.touched.full_name && (
            <p>{formik.errors.first_name}</p>
          )}
        </div>
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
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
          />
          {formik.errors.confirm_password &&
            formik.touched.confirm_password && (
              <p>{formik.errors.confirm_password}</p>
            )}
        </div>
        <div className="signUpDiv">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
