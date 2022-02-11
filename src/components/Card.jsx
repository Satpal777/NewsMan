import React from "react";
export default function Card(props) {

    let style = {
        width: "20rem",
        height: "25rem",
        margin: "12px",
        overflow: "hidden",
        background: props.bgColors
    }
    return (
        <div className="card" style={style}>
            <div className="card-body d-flex flex-column justify-content-around py-2">
                <h5 className="title">{(props.info.title).substring(0, 100) + "...."}</h5>
                <img className="w-100 " src={props.info.imgurl} alt="no-image" />
                <p className="card-text">{(props.info.desc).substring(0, 100) + "...."}   <a href={props.info.link}>read more</a></p>
            </div>
        </div>
    );
};
