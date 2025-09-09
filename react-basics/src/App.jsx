import { Child, FourthChild, SecondChild, ThirdChild } from "./Child";
import Condition from "./Condition";
import Propsdrilling from "./Propsdrilling";
import State from "./State";

function App() {
  const data = "hello this is props of child passed by parent";
  const style = {
    color: "red",
    fontSize: "12px",
  };
  const handler = (value) => {
    console.log(`this is called by child and child pass value: ${value}`);
  };
  return (
    <>
      <h1>this is main parent.</h1>
      <Child data={data} />
      <SecondChild>This is children of second child</SecondChild>
      <ThirdChild style={style}>This is third child</ThirdChild>
      <FourthChild title={2} />
      <br />
      <hr />
      <State onClick={handler} />
      <Condition />
      <hr></hr>
      <Propsdrilling />
    </>
  );
}

export default App;
