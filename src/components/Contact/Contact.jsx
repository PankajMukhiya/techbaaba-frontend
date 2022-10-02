import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({});

  // callUserContact
  const callUserContact = async () => {
    try {
      const response = await fetch("https://techbaaba-api.onrender.com/useralldata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      console.log(responseData);
      setUserData(responseData);

      if (!response.status === 200) {
        let err = new Error(response.error);
        throw err;
      }
    } catch (error) {
      console.log(`ERROR(in callUserContact): ${error} `);
    }
  };

  useEffect(() => {
    callUserContact();
  }, []);
  console.log(userData);
  // const {name, email, phone, work} = userData
  return (
    <>
      <section className="contact_section">
        <div className="container-fluid p-3 p-md-4 p-lg-5">
          {/* FIRST ROW */}
          <div className="row">
            {/* phone info */}
            <div className="contactColInfo_1 col-10 mx-auto col-md-5 col-lg-3 mb-2 d-flex justify-content-start align-items-center gap-4 ">
              <div className="">
                <i className="zmdi zmdi-phone fs-1"></i>
              </div>
              <div className="">
                <h5 className="contact_H5">Phone</h5>
                <p className="contact_P">+91 7666982581</p>
              </div>
            </div>
            {/* Email info */}
            <div className="contactColInfo_2 col-10 mx-auto col-md-5 col-lg-3  mb-2 d-flex justify-content-start align-items-center gap-4 ">
              <div className="">
                <i className="zmdi zmdi-email fs-1"></i>
              </div>
              <div className="">
                <h5 className="contact_H5">Emal</h5>
                <p className="contact_P">pankajmukhiya12345@gmail.com</p>
              </div>
            </div>
            {/* Address info */}
            <div className="contactColInfo_1 col-10 mx-auto col-md-5 col-lg-3 mb-2 d-flex justify-content-start align-items-center gap-4">
              <div className="">
                <i className="zmdi zmdi-info fs-1"></i>
              </div>
              <div className="">
                <h5 className="contact_H5">Address</h5>
                <p className="contact_P">Mumbai</p>
              </div>
            </div>
          </div>
          {/* 2ND ROW */}
          <div className="row contact_row contactColInfo_2 mt-5 px-2 d-flex justify-content-center">
            <h2 className="text-center">Get In Touch </h2>
            {/* Name field */}
            <div className="col-10 col-sm-7 col-lg-4 col-md-7 mx-auto">
              <div className="form-floating mb-2">
                <input
                  type="text"
                  className="contact_input form-control"
                  id="floatingInput"
                  placeholder="Your Name"
                />
                <label htmlFor="floatingInput">Your Name</label>
              </div>
            </div>
            {/* email field */}
            <div className="col-10 col-sm-7 col-lg-4 col-md-7 mx-auto">
              <div className="form-floating mb-2">
                <input
                  type="email"
                  className="contact_input form-control"
                  id="floatingInput"
                  placeholder="Your Email"
                />
                <label htmlFor="floatingInput">Your Email</label>
              </div>
            </div>
            {/* mobile field */}
            <div className="col-10 col-sm-7 col-lg-4 col-md-7 mx-auto">
              <div className="form-floating mb-2">
                <input
                  type="number"
                  className="contact_input form-control"
                  id="floatingInput"
                  placeholder="Your Phone"
                />
                <label htmlFor="floatingInput">Your Phone</label>
              </div>
            </div>
            {/* message field */}
            <div className="col-10  mx-auto mb-3">
              <div className="form-floating">
                <textarea
                  style={{ height: "100px" }}
                  className="form-control"
                  placeholder="Enter Your Concern"
                  id="floatingTextarea"
                ></textarea>
                <label htmlFor="floatingTextarea">Message</label>
              </div>
            </div>
            {/* button */}
            <span className="text-center">
              <button className=" signInBtn btn btn-light mb-2" type="button">
                Send Messsage
              </button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
