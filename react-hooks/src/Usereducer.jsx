import { useReducer } from "react";

const style = {
  section: {
    border: "1px solid black",
    padding: "20px",
    textAlign: "center",
  },
  button: {
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    margin: "10px",
    borderRadius: "4px",
    border: "none",
  },
};

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "Increment": {
      return { count: state.count + 1 };
    }
    case "Decrement": {
      return { count: state.count - 1 };
    }
    case "Reset": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

function Usereducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <section style={style.section}>
      <h1>This is an example of useReducer works in React js.</h1>
      <h3>State value is:{state.count}</h3>
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
