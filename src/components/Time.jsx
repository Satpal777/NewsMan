import React, { useState } from 'react';

export default function Time() {

    var count = 1;
    const [first, setfirst] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setfirst(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <>
            <span className="mx-4 p-2 fs-6 my-auto badge bg-dark text-light ">Time : {first}</span>
        </>
    );
}
