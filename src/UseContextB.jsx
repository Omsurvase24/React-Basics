import React, { useContext } from "react";
import UseContextC from "./UseContextC";

function UseContextB() {
    return (
        <div className="box">
            <h1>Component B</h1>
            <UseContextC></UseContextC>
        </div>
    );
}

export default UseContextB;