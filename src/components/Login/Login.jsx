import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { images } from "../../images";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
const Login = () => {
  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  let name, value;
  const handleChangeInp = (event) => {
    name = event.target.name;
    value = event.target.value;
    setLogUser({ ...logUser, [name]: value });
  };

  const userLogin = async (e) => {
    const { email, password } = logUser;
    // e.preventDefault()
    try {
      if (!email || !password) {
        alert("Please Fill the Data ");
      } else {
        const loginData = await fetch(
          "https://techbaaba-api.onrender.com/signin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );
        if (loginData.status === 400 || !loginData) {
          alert("Invalid Credentials !");
          console.log("Invalid Credentials !");
        } else {
          alert("Login Successfully ");
          console.log("Login Successfully ");
          navigate("/about");
        }
      }
    } catch (error) {
      console.log(`ERROR(in userLogin); ${error}`);
    }
  };

  // email and password schema
  // const LoginSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .required("Required")
  //     .email("Enter Vailid Email Address"),
  //   password: Yup.string().required("Please provide a valid password"),
  // });
  return (
    <>
      <section className="register_section">
        <div className="container p-4 p-lg-5 d-flex justify-content-lg-center align-items-lg-center ">
          <div className="row rowRegisterLogin  p-2 p-lg-5 my-lg-auto  d-flex justify-content-center align-items-center">
            {/* lOGIN CONTENT : IF ALREADY EXIST */}
            <div className="col-12 col-lg-6 p-md-5  p-lg-0 d-flex flex-column justify-content-center align-items-center">
              <img
                className="img-thumbnail  w-75 h-100 rounded-3 "
                src={images.about02}
                alt="loginImage"
              />
              <span>
                <NavLink
                  className="navbar-brand text-primary fs-5 text-center text-decoration-underline mt-3"
                  to="/register"
                >
                  Create an Account
                </NavLink>
              </span>
            </div>
            {/* SIGNUP CONTENT */}
            <div className="col-12 col-md-6">
              <h2 className="text-center  text-bg-primary mb-3">Sign In</h2>
              {/* <Formik
                initialValues={logUser}
                validationSchema={LoginSchema}
              > */}
              {/* {(formik) => {
                  const { errors, touched } = formik;
                  return ( */}
              {/* <Form */}
              <form
                method="POST"
                className=" d-flex flex-column justify-content-center align-items-center "
              >
                {/* Email input */}
                <div className="col-10 m-auto d-flex">
                  <label htmlFor="" className="form-label me-4 ">
                    <i className="zmdi zmdi-email fs-2  "></i>
                  </label>
                  {/* <Field */}
                  <input
                    name="email"
                    type="email"
                    onChange={handleChangeInp}
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                {/* email error message */}
                {/* {errors.email && touched.email ? (
                        <div className="text-danger">{errors.email}</div>
                      ) : (
                        " "
                      )} */}
                {/* Password input */}
                <div className="col-10 m-auto d-flex mt-2">
                  <label htmlFor="" className="form-label me-4">
                    <i className="zmdi zmdi-lock fs-2"></i>
                  </label>
                  <input
                    name="password"
                    onChange={handleChangeInp}
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                  />
                </div>
                {/* email error message */}
                {/* {errors.password && touched.password ? (
                        <div className="text-danger">{errors.password}</div>
                      ) : (
                        " "
                      )} */}
                <div className="col-1 mx-auto mb-2"></div>
                <button
                  className=" signInBtn btn btn-light w-25 mt-2  ms-lg-3 "
                  type="button"
                  onClick={userLogin}
                >
                  Sign In
                </button>
              </form>
              {/* );
                }} */}
              {/* </Formik> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
