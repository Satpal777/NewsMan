import React from 'react';
import { NavLink } from 'react-router-dom'
import Time from './Time';
const title = "NewsMan";

export default function Navbar(props) {

  // const toggle = () => {
  //   props.settheme("dark");
  // console.log();
  // }
  return (
    <div className="sticky-top mb-2">
      <nav className={`navbar navbar-expand-lg navbar-${props.mode === "light" ? "dark" : "light"} bg-${props.mode === "light" ? "dark" : "light"}`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand animate__animated animate__heartBeat" to="/">{title}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/technology">TECHNOLOGY</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/science">SCIENCE</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/sports">SPORTS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/entertainment">ENTERTAINMENT</NavLink>
              </li>
              <Time />
            </ul>
            <i onClick={props.theme} className={`fs-3 me-4 p-1 bi ${props.icon.iconclass} p-0 m-0`} style={{ color: props.icon.iconcolor,cursor:"pointer"}} ></i>
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
