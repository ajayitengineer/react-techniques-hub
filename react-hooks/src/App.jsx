import Usecontext from "./Usecontext";
import Useeffect from "./Useeffect";
import Usememo from "./Usememo";
import Usereducer from "./Usereducer";
import Usestate from "./Usestate";

function App() {
  const style = {
    border: "1px solid black",
    padding: "20px",
    textAlign: "center",
  };
  return (
    <section style={style}>
      <h1>React hooks examples.</h1>
      <Usestate />
      <Useeffect />
      <Usememo />
      <Usereducer />
      <Usecontext />
    </section>
  );
}

export default App;
