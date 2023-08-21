import React from "react";
import logo from "../assets/logoMain.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="content ms-auto ">
              <ul className="navbar-nav align-items-center">
                <span className="grayLine"></span>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    RESOURCES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    IDEAS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>
              </ul>
            </div>
            <div className="jointBtn rightConer">
              <span className="darkLine"></span>
              <a href="#">JOIN NOW</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
