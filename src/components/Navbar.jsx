import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Time from './Time';
const title = "NewsMan";

export default function Navbar(props) {

  // const toggle = () => {
  //   props.settheme("dark");
  // console.log();
  // }
  return (
    <div className="sticky-top mb-2">
      <nav className={`navbar navbar-expand-lg navbar-${props.mode == "light" ? "dark" : "light"} bg-${props.mode == "light" ? "dark" : "light"}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/technology">TECHNOLOGY</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/science">SCIENCE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/sports">SPORTS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/entertainment">ENTERTAINMENT</Link>
              </li>
              <Time />
            </ul>
            <i onClick={props.theme} className={`fs-3 me-4 p-1 bi ${props.icon.iconclass} p-0 m-0`} style={{ color: props.icon.iconcolor }} ></i>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );


}
