import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {SignInSchema} from './InputVal'
const Formuser = () => {
  // initial values
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  // setUser(user)
  // const initialValues = {
  //   email: "",
  //   password: "",
  // };

  //  validation
  // const SignInSchema = Yup.object().shape({
  //   email: Yup.string().email().required("Email is required"),
  
  //   password: Yup.string()
  //     .required("Password is required")
  //     .min(4, "Password is too short - should be 4 chars minimum"),
  // });

  //submit
  const submitForm = (values) => {
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={user}
        validationSchema={SignInSchema}
        onSubmit={submitForm}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div className="container">
              <h1>Sign in to continue</h1>
              <Form >
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    // value={values.email}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                  />
                  {errors.email && touched.email && (
                    <ErrorMessage name="email" component="span" className="error">{errors.email}</ErrorMessage>
                  )}
                </div>

                <div className="form-row">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    // value={values.password}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    className={
                      errors.password && touched.password ? "input-error" : null
                    }
                  />
                  {errors.password && touched.password && (
                    <ErrorMessage name="password" component="span" className="error">{errors.password}</ErrorMessage>
                  )}
                </div>

                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Sign In
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
      );
    </>
  );
};

export default Formuser;
