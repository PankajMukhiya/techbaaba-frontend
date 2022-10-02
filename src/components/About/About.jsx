import React, { useEffect, useState } from "react";
import { images } from "../../images";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const [aboutInfo, setAboutInfo] = useState({});
  const callAboutPage = async () => {
    try {
      const response = await fetch("https://techbaaba-api.onrender.com/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      let responseData = await response.json();

      setAboutInfo(responseData);

      if (!response.status === 200) {
        let err = new Error(response.error);
        throw err;
      }
    } catch (error) {
      console.log(`ERROR(in callAboutPage): ${error} `);
      navigate("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
    // eslint-disable-next-line
  }, []);
  // console.log(aboutInfo.name);
  return (
    <>
      <section className="about_section">
        <div className="container">
          {/* form becoz of data get dynamically */}
          <form method="GET">
            {/* main row */}
            <div className="row main_about_row p-4 position-relative">
              <p className="text-end text-decoration-underline">Edit Profile</p>

              {/* 1st row */}
              <div className="row d-flex justify-content-center align-items-center ">
                {/* img */}
                <div className="col-5 d-flex justify-content-center align-items-center">
                  <img
                    className="about_profile_img img-fluid rounded-3"
                    src={images.about02}
                    alt="profileImage"
                  />
                </div>
                {/* info */}
                <div className="col-7">
                  <h4 className=" fw-bold">{aboutInfo && aboutInfo.name}</h4>
                  <h6 className="fw-normal text-primary ">{aboutInfo && aboutInfo.work}</h6>
                  <p className="">
                    Rankings: <span className="fw-bold">9/10</span>
                  </p>
                  <ul className="nav nav-tabs mt-3" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        id="home_tab"
                        // aria-current="page"
                        href="#home"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        data-toggle="tab"
                        id="profile_tab"
                        // aria-current="page"
                        href="#profile"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="mt-2" />
              {/* 2nd row */}
              <div className="row mt-2d-flex justify-content-center align-items-center gap-4">
                {/* user id row */}
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-5 text-center">User Id</div>
                  <div className="col-5 text-info text-start">{aboutInfo && aboutInfo._id}</div>
                </div>
                {/* Name row */}
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-5 text-center ">Name</div>
                  <div className="col-5 text-info text-start">
                  {aboutInfo && aboutInfo.name}
                  </div>
                </div>
                {/* Email row */}
                <div className="row d-flex justify-content-center align-items-center ">
                  <div className="col-5 text-center">Email</div>
                  <center className="col-5 text-info text-start">
                  {aboutInfo && aboutInfo.email}
                  </center>
                </div>
                {/* Phone row */}
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-5 text-center">Phone</div>
                  <div className="col-5 text-info text-start">{aboutInfo && aboutInfo.phone}</div>
                </div>
                {/* Profession row */}
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-5 text-center">Profession</div>
                  <div className="col-5 text-info text-start">
                  {aboutInfo && aboutInfo.work}
                  </div>
                </div>
              </div>
              {/* 3rd row : socialmedia links */}
              <div
                className="row position-absolute d-flex justify-content-end  "
                style={{ zIndex: 9, height: "60vh" }}
              >
                <div className="col-1 d-flex flex-column gap-4 mt-5">
                  <div></div>
                  <div className="col-12 ">
                    <a href="http://www.linkedin.com/pankajkumarmukhiya">
                      <i className="text-black fs-4 zmdi zmdi-linkedin"></i>
                    </a>
                  </div>
                  <div className="col-12">
                    <a href="http://www.facebook.com/pankajkumarmukhiya">
                      <i className="text-black fs-4 zmdi zmdi-facebook"></i>
                    </a>
                  </div>
                  <div className="col-12">
                    <a href="http://www.github.com/pankajmukhiya">
                      <i className="text-black fs-4 zmdi zmdi-github"></i>
                    </a>
                  </div>
                  <div className="col-12">
                    <a href="http://www.facebook.com/pankajmukhiya12345">
                      <i className="text-black fs-4 zmdi zmdi-instagram "></i>
                    </a>
                  </div>
                  <div className="col-12">
                    <a href="http://www.youtube.com">
                      <i className="text-black fs-4 zmdi zmdi-youtube-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default About;
