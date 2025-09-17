import { useEffect, useState } from "react";
const style = {
  border: "1px solid black",
  padding: "10px",
  textAlign: "center",
};
function Useeffect() {
  const [data, setData] = useState(false);
  useEffect(() => {
    console.log("this is run every time component render");
  });
  useEffect(() => {
    console.log("this will run only at time of mount single time");
    return () => {
      console.log("this will run at the time of unmount");
    };
  }, []);
  useEffect(() => {
    console.log(
      "this will only return at the time of any state change or any argument in [] change"
    );
  }, [data]);

  return (
    <section style={style}>
      <p>Use effect example.</p>
      <button onClick={() => setData(!data)}>Click</button>
    </section>
  );
}

export default Useeffect;
