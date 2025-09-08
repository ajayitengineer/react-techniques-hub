// Conditional rendering
import { CONNREFUSED } from "dns";
import { useState } from "react";

function Condition1() {
  return (
    <>
      <p>This is condition one</p>
    </>
  );
}

function Condition2() {
  return (
    <>
      <p>This is Conditin second.</p>
    </>
  );
}

function Condition() {
  const [value, setValue] = useState(true);
  return (
    <>
      <h1>This is example of Conditional rendering</h1>
      <button onClick={() => setValue(!value)}>
        Click to see conditional rendering.
      </button>
      {/* {value && <Condition1 />}
      {!value && <Condition2 />} */}
      {/* {value ? <Condition1 /> : <Condition2 />} */}
    </>
  );
}

export default Condition;
