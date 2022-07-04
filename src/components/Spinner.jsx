import React from 'react'
import loading from './images/loading.gif'
let gifstyle = {
    width: "100%",
    height: "0",
    paddingBottom: "100%",
    position: "relative"
};

const Spinner = () => {
    return (
        <div className="text-center">
            <img className="my-3" src={loading} alt="loading" />
        </div>    
    )
}

export default Spinner