// it convers state and event handling
import { useState } from "react";

function State({ onClick }) {
  const [data, setData] = useState(true);
  const handleClick = () => {
    setData(!data);
  };
  const secondClick = (value) => {
    console.log(value);
  };
  const style = {
    border: "1px solid black",
    padding: "10px",
    button: {
      padding: "15px",
      marginTop: "10px",
      backgroundColor: "black",
      color: "white",
      borderRadius: "12px",
      border: "none",
    },
  };
  return (
    <section style={style}>
      <h1>This is state Component.</h1>
      <p>{data ? "state is true" : "state is false"}</p>
      <button onClick={handleClick} style={style.button}>
        Click here to change state first method.
      </button>
      <br />
      <button onClick={() => setData(!data)} style={style.button}>
        Click here to change state second method
      </button>
      <br />
      <button style={style.button} onClick={() => secondClick("hello world")}>
        Click to see how argument pass in event handler
      </button>
      <br />
      <button style={style.button} onClick={() => onClick("hello from child")}>
        Click to check how parent pass event handler in child
      </button>
    </section>
  );
}

export default State;
