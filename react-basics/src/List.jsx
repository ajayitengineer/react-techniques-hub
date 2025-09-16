const style = {
  border: "1px solid black",
  padding: "5px",
};
import data from "../data";
function Listitem({ name, city, state }) {
  return (
    <section style={style}>
      <h1>{name}</h1>
      <h2>{city}</h2>
      <h3>{state}</h3>
    </section>
  );
}

function List() {
  return (
    <section>
      {data.map((datum) => (
        <Listitem {...datum} key={datum.name + datum.city} />
      ))}
    </section>
  );
}

export default List;
