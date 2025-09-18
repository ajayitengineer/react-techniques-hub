import { useReducer } from "react";

const style = {
  section: {
    border: "1px solid black",
    padding: "20px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "black",
    padding: "10px",
    color: "white",
    margin: "20px",
  },
};

const initialstate = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "Increment": {
      return { count: state.count + 1 };
    }
    case "Decrement": {
      return { count: state.count - 1 };
    }
    case "Reset": {
      return initialstate;
    }
    default: {
      return state;
    }
  }
}

function Usereducer() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <section style={style.section}>
      <h1>This is an example for understanding useReducer.</h1>
      <p>Value of state is: {state.count}</p>
      <button
        style={style.button}
        onClick={() => dispatch({ type: "Increment" })}
      >
        Increment
      </button>
      <button
        style={style.button}
        onClick={() => dispatch({ type: "Decrement" })}
      >
        Decrement
      </button>
      <button style={style.button} onClick={() => dispatch({ type: "Reset" })}>
        Reset
      </button>
    </section>
  );
}

export default Usereducer;
