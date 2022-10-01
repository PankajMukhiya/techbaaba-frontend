import React from "react";
import { Formik, Form, Field, } from "formik";
import * as Yup from "yup";

function Demoform() {
  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short")
      .max(26, "Too Long")
      .required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <>
      <div className="container mt-5">
        <h2>SIGN UP</h2>
        <div className="row p-5">
          <div className="col-12 col-md-6">
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              validationSchema={RegisterSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(formik) => {
                const { errors, touched } = formik;
                return (
                  <Form>
                    {/* name */}
                    <div className="col-12  mx-auto mb-2 ">
                      <div className="col-10 d-flex">
                        <label htmlFor="" className="form-label me-4">
                          <i className="zmdi zmdi-lock fs-2"></i>
                        </label>
                        <Field
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder=" Your Name"
                        />
                      </div>
                      {/* error message */}
                      {/* errors.name && touched.name is true it means that error accured */}
                      {errors.name && touched.name ? (
                        <div className="ms-5 text-danger">{errors.name}</div>
                      ) : (
                        " "
                      )}
                      {/* also like this for error message */}
                      {/* <div className="ms-5 text-danger">
                        <ErrorMessage name="name" />
                      </div> */}
                    </div>
                    {/* Email */}
                    <div className="col-12  mx-auto mb-2">
                      <div className="col-10 d-flex">
                        <label htmlFor="" className="form-label me-4">
                          <i className="zmdi zmdi-lock fs-2"></i>
                        </label>
                        <Field
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder=" Your Email"
                        />
                      </div>
                      {/* error message */}
                      {errors.email && touched.email ? (
                        <div className="ms-5 text-danger ">{errors.email}</div>
                      ) : (
                        " "
                      )}
                    </div>
                    {/* password */}
                    <div className="col-12  mx-auto mb-2">
                      <div className="col-10 d-flex">
                        <label htmlFor="" className="form-label me-4">
                          <i className="zmdi zmdi-lock fs-2"></i>
                        </label>
                        <Field
                          name="Password"
                          type="password"
                          className="form-control"
                          placeholder=" Your Password"
                        />
                      </div>
                      {/* error message */}
                      {errors.password && touched.password ? (
                        <div className="ms-5 text-danger">
                          {errors.password}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <button type="submit">Submit</button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demoform;
