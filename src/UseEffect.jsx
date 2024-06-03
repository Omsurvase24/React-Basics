import React, { useState, useEffect } from "react";

function UseEffectFn() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    function addCount() {
        setCount(c => c + 1);
    }

    function subCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <div>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Sub</button> <br />
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default UseEffectFn