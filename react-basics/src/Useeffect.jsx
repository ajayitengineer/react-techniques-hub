import { useEffect, useState } from "react";

function Useffect() {
  const [count, setCount] = useState(0);

  // Runs on every render
  useEffect(() => {
    console.log("Effect with no dependency → runs on every render");
    return () => {
      console.log("Cleanup for every render");
    };
  });

  // Runs only when `count` changes
  useEffect(() => {
    console.log("Effect runs when count changes:", count);
  }, [count]);

  // Runs only once (on mount) + cleanup on unmount
  useEffect(() => {
    console.log("Mounted component");
    return () => {
      console.log("Unmounted component");
    };
  }, []);
  const style = {
    border: "1px solid black",
    padding: "20px",
    margin: "20px",
    textAlign: "center",
  };

  return (
    <section style={style}>
      <h1>This is example of useEffect hook.</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increase count</button>
    </section>
  );
}

export default Useffect;
