import React, { useState } from "react";

const style = {
  section: {
    border: "1px solid black",
    padding: "20px",
    margin: "15px",
  },
};

function Child1({ data }) {
  console.log("child is mounting without memo");
  return (
    <section>
      <h1>This is child component(without memo)</h1>
      <p>It rerender when parent rerender</p>
      <p>Value set by parent by props: {data}</p>
    </section>
  );
}

const Child2 = React.memo(({ data }) => {
  console.log("child with memo");
  return (
    <section>
      <h1>Child component with React.memo</h1>
      <p>Value set by parent by props: {data}</p>
    </section>
  );
});

function Reactmemo() {
  const [welcome, setWelcome] = useState(false);
  const [data, setData] = useState("Initial");
  return (
    <section style={style.section}>
      <h1>This is parent component and we will change its state.</h1>
      <p>Message is: {welcome ? "Hello World!" : "Bye World!"}</p>
      <button onClick={() => setWelcome(!welcome)}>
        Click to change state
      </button>
      <button onClick={() => setData("changed")}>Change props</button>
      <Child1 data={data} />
      <Child2 data={data} />
      <p>If props not changed then child will not rerender.</p>
    </section>
  );
}

export default Reactmemo;
