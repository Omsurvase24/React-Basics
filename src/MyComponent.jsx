import React, { useState } from "react";

function MyComponent() {


    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>
        </div>
    );

}

export default MyComponent