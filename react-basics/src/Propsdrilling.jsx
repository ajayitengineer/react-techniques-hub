const style = {
  border: "1px solid black",
  padding: "20px",
  margin: "20px",
  textAlign: "center",
};

function Propsdrilling1({ value }) {
  return (
    <section style={style}>
      <h1>Props drilling first.</h1>
      <Propsdrilling2 value={value} />
    </section>
  );
}
function Propsdrilling2({ value }) {
  return (
    <section style={style}>
      <h1>Props drilling second.</h1>
      <Propsdrilling3 value={value} />
    </section>
  );
}
function Propsdrilling3({ value }) {
  return (
    <section style={style}>
      <h1>Props drilling third.</h1>
      <p>
        Props passed by parent which reached here by crossing multiple level its
        value is : {value}
      </p>
    </section>
  );
}

function Propsdrilling() {
  return (
    <section style={style}>
      <h1>Props drilling example.</h1>
      <Propsdrilling1 value="hello world" />
    </section>
  );
}
export default Propsdrilling;
