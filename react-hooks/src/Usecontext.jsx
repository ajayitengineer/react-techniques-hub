import { useContext } from "react";

const style = {
  section: {
    border: "1px solid black",
    padding: "20px",
  },
};

const [data, setData] = useContext(false);
function First() {
  return (
    <section style={style.section}>
      <p>First Child</p>
    </section>
  );
}

function Second() {
  return (
    <section style={style.section}>
      <p>Second Child</p>
      <First />
    </section>
  );
}

function Third() {
  return (
    <section style={style.section}>
      <p>Third Child</p>
      <Second />
    </section>
  );
}

function Usecontext() {
  return (
    <section style={style.section}>
      <h1>This is an example of Use context.</h1>
      <Third />
    </section>
  );
}

export default Usecontext;
