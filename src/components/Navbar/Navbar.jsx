import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [menuBar, setMenuBar] = useState(true);
  const [mode, setMode] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-info fs-3 ms-lg-5" to="/">
            TECHBAABA
          </NavLink>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setMenuBar(!menuBar)}
          >
            {menuBar ? (
              <span className="navbar-toggler-icon"></span>
            ) : (
              <button
                type="button "
                className="btn-close"
                aria-label="Close"
              ></button>
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-5">
              <li className="nav-item">
                <NavLink
                  className="nav-link  text-capitalize fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {["about", "contact", "register", "login"].map((navItems) => {
                return (
                  <li className="nav-item" key={navItems}>
                    <NavLink
                      className="nav-link text-capitalize fs-5"
                      to={`/${navItems}`}
                    >
                      {navItems}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <button
              className="btn btn-light btn-outline-dark ms-lg-3 "
              //setMODE
              onClick={() => {
                setMode(!mode);
              }}
              type="button"
            >
              {mode ? "Light " : "Dark "}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
