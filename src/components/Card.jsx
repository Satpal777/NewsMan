import React from "react";
import { NavLink } from 'react-router-dom'

export default function Card(props) {

    let style = {
        width: "20rem",
        height: "25rem",
        margin: "12px",
        overflow: "hidden",
        background: props.bgColors
    }
    return (
        <div className={`card shadow animate__animated  ${ props.bgColors!=="#ffecec" ?( props.bgColors==="#dcedc8" ?"animate__fadeInLeft":"animate__fadeInRight") :"animate__fadeIn" } `} style={style}>
            <div className="card-body d-flex flex-column justify-content-around py-2">
                <h5 className="card-title">{(props.info.title).substring(0, 100) + "...."}</h5>
                <img className="w-100 " src={props.info.imgurl} alt="" />
                <p className="card-text">{(props.info.desc).substring(0, 100) + "...."} <NavLink className="nav-link" aria-current="page" to={`/news/:${props.info.id}`}>read more</NavLink></p>
            </div>
        </div>
    );
};
