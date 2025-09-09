import { useRef } from "react";

// Use Ref uses
//(1.) Access DOM and manuplate it
//(2.) Like state var but not render again on change.

function UseRef() {
  const refHead = useRef();
  const count = useRef(0);
  const handleClick = () => {
    console.log(refHead.current.innerText);
  };
  const changeCount = () => {
    count.current = count.current + 1;
  };
  const style = {
    border: "1px solid black",
    padding: "20px",
    margin: "40px",
    textAlign: "center",
  };
  return (
    <section style={style}>
      <h1 ref={refHead}>Hello world this example of Use Ref.</h1>
      <button onClick={handleClick}>Click to check use ref result.</button>
      <button onClick={changeCount}>Increase count</button>
      <button onClick={() => console.log(count)}>See latest count</button>
    </section>
  );
}

export default UseRef;
