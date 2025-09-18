function Notes7() {
  return (
    <section className="notes">
      <p>
        When we use <span className="highlight">React.memo</span>, a child
        component will not re-render if its props don’t change. But if we pass
        an event handler (function) as a prop, React will create a new function
        on every render. This means the child sees the prop as "changed" every
        time, so
        <span className="highlight"> React.memo</span> cannot prevent the
        re-render. To fix this, we use{" "}
        <sapn className="highlight">useCallback</sapn>, which memoizes the
        function so that its reference stays the same unless its dependencies
        change.
      </p>
    </section>
  );
}

export default Notes7;
