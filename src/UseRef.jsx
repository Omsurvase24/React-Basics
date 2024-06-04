import React, { useState, useEffect, useRef } from "react";

function UseRef() {

    // let [number, setNumber] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    return (<div>
        <button onClick={handleClick}>
            Click Me!
        </button>
        <input ref={inputRef} />
    </div>
    );
}

export default UseRef;