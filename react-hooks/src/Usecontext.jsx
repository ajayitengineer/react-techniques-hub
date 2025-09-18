import { createContext, useContext, useState } from "react";

const style = {
  section: {
    border: "1px solid black",
    padding: "20px",
    textAlign: "center",
    margin: "10px",
  },
};

const Usercontext = createContext();
const CounterContext = createContext();

function First() {
  const data = useContext(Usercontext);
  const [count, setCount] = useContext(CounterContext);
  return (
    <section style={style.section}>
      <h1>This is first child.</h1>
      <p>
        Value passed by 3rd level of parents: {data.name}, {data.city}
      </p>
      <p>Count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>Change count</button>
    </section>
  );
}

function Second() {
  return (
    <section style={style.section}>
      <h1>This is second child.</h1>
      <First />
    </section>
  );
}

function Third() {
  return (
    <section style={style.section}>
      <h1>This is third child.</h1>
      <Second />
    </section>
  );
}
function Usecontext() {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={[count, setCount]}>
      <Usercontext.Provider value={{ name: "John", city: "NY" }}>
        <section style={style.section}>
          <h1>This is an example of Usecontext.</h1>
          <Third />
        </section>
      </Usercontext.Provider>
    </CounterContext.Provider>
  );
}

export default Usecontext;
