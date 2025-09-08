// this covered all ways of passing props and children with default props and props types type checking.
import propTypes from "prop-types";

function Child(props) {
  return (
    <>
      <h3>this is child componet.</h3>
      <p>{props.data}</p>
    </>
  );
}

function SecondChild(props) {
  return (
    <>
      <h3>{props.children}</h3>
    </>
  );
}

function ThirdChild({ style, children }) {
  return (
    <>
      <h3 style={style}>{children}</h3>
    </>
  );
}

function FourthChild({ title = "this is default" }) {
  return (
    <>
      <p title={title}>this is Default proptype example</p>
    </>
  );
}

FourthChild.propTypes = {
  title: propTypes.string,
};

export { Child, SecondChild, ThirdChild, FourthChild };
