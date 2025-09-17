import { useState } from "react";

function Usestate() {
  const [value, setValue] = useState(true);
  const style = {
    border: "1px solid black",
    padding: "10px",
    textAlign: "center",
  };
  return (
    <section style={style}>
      <p>Use state example</p>
      <h1>{value ? "hello world" : "Bye world"}</h1>

      <button onClick={() => setValue(!value)}>Change state!</button>
    </section>
  );
}

export default Usestate;
