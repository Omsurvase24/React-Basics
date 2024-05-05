function Button() {

    // const handleClick = (e) => console.log(e);
    const handleClick = (e) => e.target.textContent = "OUCH!";

    return (
        <button onClick={(e) => handleClick(e)}>Click Me</button>
    );
}

export default Button