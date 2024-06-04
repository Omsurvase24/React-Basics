import React, { useContext } from "react";
import UseContextD from "./UseContextD";

function UseContextC() {
    return (
        <div className="box">
            <h1>Component C</h1>
            <UseContextD></UseContextD>
        </div>
    );
}

export default UseContextC;