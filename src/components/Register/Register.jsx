import React, { useState } from "react";
import { images } from "../../images";
import { NavLink, useNavigate } from "react-router-dom";
// import { Formik, Field, Form } from "formik";
// import { RegisterInpDataSchema } from "./regInpDataVali";

const Register = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cPassword: "",
  });
  let name, value;
  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserInput({ ...userInput, [name]: value });
  };

  // store user input data  on submit or register
  const postData = async (e) => {
    e.preventDefault();
    try {
      // e.preventDefault()
      const { name, email, phone, work, password, cPassword } = userInput;
      // validate
      if (!name || !email || !phone || !work || !password || !cPassword) {
        alert("Error: please fill the Fields properly ");
        console.log("Error: please fill the Fields properly ");
      } else {
        //  send these user data in database using fetch
        const userData = await fetch(
          "https://techbaaba-api.onrender.com/register",
          {
            //user data send
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            //and here in body (req.body) send the user data
            body: JSON.stringify({
              name,
              email,
              phone,
              work,
              password,
              cPassword,
            }),
          }
        );
        console.log(userData);
        const recieveUserData = await userData.json();
        if (recieveUserData.status === 422 || !recieveUserData) {
          alert("Invalid Registration");
          console.log("Invalid Registration");
        } else {
          alert(" Registration Successfully");
          console.log(" Registration Successfully");
          navigate("/login");
        }
      }
    } catch (error) {
      console.log(`ERROR(in postData): ${error}`);
    }
  };

  return (
    <>
      <section className="register_section">
        <div className="container p-4 p-lg-5 d-flex justify-content-lg-center align-items-lg-centerclgc ">
          <div className="row rowRegisterLogin  p-2 p-lg-5 my-lg-auto  d-flex justify-content-center align-items-center">
            {/* SIGNUP CONTENT */}
            {/* Formik */}
            {/* <Formik
              initialValues={userInput}
              validationSchema={RegisterInpDataSchema}
            > */}
            {/* {(formik) => {
                const { errors, touched  } = formik;
                return ( */}
            <div className="col-12 col-md-6">
              <h2 className="text-center  text-bg-primary">Sign Up</h2>
              {/* <Form */}
              <form
                method="POST"
                className=" d-flex flex-column justify-content-center align-items-center  "
              >
                {/* name input */}
                <div className="col-10 m-auto d-flex mb-2 ">
                  <label htmlFor="" className="form-label me-4">
                    <i className="zmdi zmdi-account fs-2 "></i>
                  </label>
                  {/* <Field */}
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder=" Your Name"
                    value={userInput.name}
                    onChange={handleInput}
                  />
                </div>
                {/* error meassage */}
                {/* {errors.name && touched.name ? (
                        <div className=" text-danger  mb-2"> */}
                {/* <ErrorMessage className="" name="name" /> */}
                {/* {errors.name}
                        </div>
                      ) : (
                        ""
                      )} */}
                {/* Email input */}
                <div className="col-10 m-auto d-flex mb-2 align-items-sm-end ">
                  <label htmlFor="" className="form-label me-4">
                    <i className="zmdi zmdi-email fs-2    "></i>
                  </label>
                  {/* <Field */}
                  <input
                    name="email"
                    value={userInput.email}
                    onChange={handleInput}
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                {/* Phone input */}
                <div className="col-10 m-auto d-flex mb-2">
                  <label htmlFor="" className="form-label me-4">
                    <i className="zmdi zmdi-phone fs-2"></i>
                  </label>
                  {/* <Field */}
                  <input
                    name="phone"
                    value={userInput.phone}
                    onChange={handleInput}
                    type="tel"
                    className="form-control"
                    placeholder="Your Contact Number"
                  />
                </div>
                {/* Profession input */}
                <div className="col-10 m-auto d-flex mb-2">
                  <label htmlFor="" className="form-label me-4">
                    <i className="zmdi zmdi-collection-plus fs-2"></i>
                  </label>
                  {/* <Field */}
                  <input
                    name="work"
                    value={userInput.work}
                    onChange={handleInput}
                    type="text"
                    className="form-control"
                    placeholder="Your Profession"
                  />
                </div>
                {/* Password input */}
                <div className="col-10 m-auto d-flex mb-2">
                  <label htmlFor="" className="form-label me-4">
                    <i className="zmdi zmdi-lock fs-2"></i>
                  </label>
                  {/* <Field */}
                  <input
                    name="password"
                    value={userInput.password}
                    onChange={handleInput}
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                  />
                </div>
                {/* confirmed Password input */}
                <div className="col-10 m-auto d-flex mb-2">
                  <label htmlFor="" className="form-label me-4">
                    <i className="zmdi zmdi-lock fs-2"></i>
                  </label>
                  {/* <Field */}
                  <input
                    name="cPassword"
                    value={userInput.cPassword}
                    onChange={handleInput}
                    type="password"
                    className="form-control"
                    placeholder="Confirm Your Password"
                  />
                </div>
                <button
                  className={`signInBtn btn btn-light  ms-lg-3  `}
                  // className={`signInBtn btn btn-light  ms-lg-3 ${
                  //   !(dirty && isValid) ? " disabled-btn" : ""
                  // } `}
                  // disabled={!(dirty && isValid)}
                  type="button"
                  onClick={postData}
                >
                  Sign Up
                </button>
              </form>
            </div>
            {/* );
              }} */}
            {/* </Formik> */}
            {/* lOGIN CONTENT : IF ALREADY EXIST */}
            <div className="col-12 col-lg-6 my-3 my-lg-5 d-flex flex-column justify-content-center align-items-center">
              <img
                className="img-thumbnail w-75 h-100 rounded-3"
                src={images.img1}
                alt="loginImage"
              />
              <span>
                <NavLink
                  className="navbar-brand text-primary fs-5 text-center text-decoration-underline mt-3"
                  to="/login"
                >
                  I'm Already Registered
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
