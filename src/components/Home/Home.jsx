import React from "react";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row position-relative ">
          <div
            className="col-12 w-50 position-absolute opacity-50"
            style={{ height: "90vh", background: "#bdfff5" }}
          ></div>
          <div
            className="col-12 d-flex flex-column align-items-center justify-content-center "
            style={{ height: "90vh", zIndex: 1 }}
          >
            <p className=" text-primary home_P">WELCOME</p>
            <h2 className=" ">We Are The MERN Developer</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
