import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar sticky navbar-expand-lg navbar-light bg-white"
      style={{
        position: "fixed",
        top: "0",
        width: "100vw",
        zIndex: 10,
        boxShadow: " 5px 10px 10px 2px rgba(17, 17, 17, 0.253)",
      }}
    >
      <div
        className="container-fluid "
        style={{
          width: "1200px",
          fontWeight: "700",
        }}
      >
        <a className="navbar-brand" href="#">
          <img
            src="https://assisiwellnessandhospitalitysevices.com/images/logo.png"
            alt=""
            width={150}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              HOME
            </a>
            <a className="nav-link" href="#">
              ABOUT US
            </a>
            <a className="nav-link" href="#">
              WHY ASSISI
            </a>
            <a className="nav-link" href="#">
              OUR SERVICES
            </a>
            <a className="nav-link" href="#">
              OUR TEAM
            </a>
            <a className="nav-link" href="#">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
