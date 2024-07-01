import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



export default function Navbar(props) {
  onchange = (evt) => {
    evt.value = evt.target.value;
    let btns  = document.getElementsByClassName("btn");
    for(let b of btns){
      b.style.backgroundColor = evt.value;
    }
    
  }

  
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/About" aria-disabled="true">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {/* user define color for theme */}
          <label htmlFor="color_pick" className="form-label">
            Pick your button theme
          </label>
          <input
            type="color"
            className="nav-item mx-3 form-control form-control-color color_picker-size"
            id="color_pick"
            value="#563d7c"
            onChange={onchange}
            
          />

          {/* mode controller switch */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="darkmode"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label "
              id="toggel_text"
              htmlFor="darkmode"
            >
              enable dark mode
            </label>
          </div>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
