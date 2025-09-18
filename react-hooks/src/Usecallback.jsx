import React, { useCallback, useState } from "react";
import "./App.css";

const Child1 = React.memo(({ onClick }) => {
  console.log("child is mouting without useCallback");
  return (
    <section className="wrapper">
      <p>
        Child component, Although it is wrapped in memo but still it will
        rerender.
      </p>
      <button onClick={onClick}>Click</button>
    </section>
  );
});

function Withoutcallback() {
  const [count, setCount] = useState(false);
  const handle = () => console.log("function passed by parent");
  return (
    <section className="wrapper">
      <p>Parent component.</p>
      <button onClick={() => setCount(!count)}>Change state</button>
      <Child1 onClick={handle} />
    </section>
  );
}

const Child2 = React.memo(({ onClick }) => {
  console.log("child is mouting with useCallback");
  return (
    <section className="wrapper">
      <p>
        Child component, Although it is wrapped in memo but still it will
        rerender.
      </p>
      <button onClick={onClick}>Click</button>
    </section>
  );
});

function Withcallback() {
  const [count, setCount] = useState(false);
  const handle = useCallback(() => {
    console.log("function passed by parent with usecall back");
  }, []);
  return (
    <section className="wrapper">
      <p>Parent component.</p>
      <button onClick={() => setCount(!count)}>Change state</button>
      <Child2 onClick={handle} />
    </section>
  );
}

function Usecallback() {
  return (
    <section id="use-callback">
      <div className="use-callback-child">
        <h1>Example without useCallback</h1>
        <Withoutcallback />
      </div>
      <div className="use-callback-child">
        <h1>Example with useCallback</h1>
        <Withcallback />
      </div>
    </section>
  );
}

export default Usecallback;
