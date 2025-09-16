import { useRef, useState } from "react";

const style = {
  section: {
    border: "1px solid black",
    padding: "10px",
    textAlign: "center",
  },
};
function Inputnumber({ value, onClick }) {
  const ref = useRef();
  return (
    <section>
      <input type="text" defaultValue={value} ref={ref} />
      <button onClick={() => onClick(ref.current.value)}>Submit</button>
    </section>
  );
}
function Result({ result }) {
  return (
    <section>
      <h1>Result is : {result}</h1>
    </section>
  );
}
function Stateuplift() {
  const [value, setValue] = useState(0);
  const handler = (num) => {
    setValue(num);
  };
  return (
    <section style={style.section}>
      <h1> This is example of state lifting.</h1>
      <Inputnumber value={value} onClick={handler} />
      <Result result={value} />
    </section>
  );
}

export default Stateuplift;
