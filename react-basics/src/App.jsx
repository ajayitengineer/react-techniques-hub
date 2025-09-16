import { Child, FourthChild, SecondChild, ThirdChild } from "./Child";
import Condition from "./Condition";
import Errorcallback from "./Errorfallback";
import Fault from "./Fault";
import List from "./List";
import Propsdrilling from "./Propsdrilling";
import State from "./State";
import Stateuplift from "./Stateuplift";
import Useffect from "./Useeffect";
import UseRef from "./UseRef";
import { ErrorBoundary } from "react-error-boundary";

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
    <ErrorBoundary FallbackComponent={Errorcallback}>
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
      <hr />
      <UseRef />
      <hr />
      <Useffect />
      <Stateuplift />
      <List />
      <Fault />
    </ErrorBoundary>
  );
}

export default App;
