import Heading from "./Heading";
import Notes6 from "./Notes6";
import Notes7 from "./Notes7";
import Reactmemo from "./Reactmemo";
import Usecallback from "./Usecallback";
import Usecontext from "./Usecontext";
import Useeffect from "./Useeffect";
import Usememo from "./Usememo";
import Usereducer from "./Usereducer";
import Usestate from "./Usestate";

function App() {
  const style = {
    border: "1px solid black",
    padding: "10px",
    textAlign: "center",
    margin: "20px",
  };
  return (
    <section style={style}>
      <h1>React hooks examples.</h1>
      <Heading topic="(1.) useState"></Heading>
      <Usestate />
      <Heading topic="(2.) useEffect"></Heading>
      <Useeffect />
      <Heading topic="(3.) usememo"></Heading>
      <Usememo />
      <Heading topic="(4.) useReducer"></Heading>
      <Usereducer />
      <Heading topic="(5.) useContext"></Heading>
      <Usecontext />
      <Notes6 />
      <Heading topic="(Not a hook but need to cover) React.memo"></Heading>
      <Reactmemo />
      <Notes7 />
      <Heading topic="(6.) useCallback"></Heading>
      <Usecallback />
    </section>
  );
}

export default App;
