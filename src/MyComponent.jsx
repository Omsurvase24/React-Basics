import React, { useState } from "react";

function MyComponent() {

    const [count, setCount] = useState(0);

    function increment() {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    function decrement() {
        setCount(count - 1);
    };

    function reset() {
        setCount(0);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default MyComponent