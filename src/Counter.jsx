import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increase Count</button> <br />
            <button onClick={decrement}>Decrease Count</button> <br />
            <button onClick={reset}>Reset Count</button>
        </div>
    );
}

export default Counter