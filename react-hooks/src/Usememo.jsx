import { useState, useMemo } from "react";
const style = {
  border: "1px solid black",
  padding: "10px",
  textAlign: "center",
};
function Usememo() {
  const [n, setN] = useState(1000);

  const calc = (n) => {
    console.log("function running");
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum = sum + i;
    }
    return sum;
  };

  const value = useMemo(() => calc(n), [n]);

  return (
    <section style={style}>
      <p>Use memo example</p>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
      />
      <p>value of sum is : {value}</p>
    </section>
  );
}

export default Usememo;
