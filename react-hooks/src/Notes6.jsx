function Notes6() {
  return (
    <section>
      <h1>Notes before going deep into useCallback hook.</h1>
      <p>
        As, we know if parent's state change then its rerender in that case all
        associated children have to be rerender.
      </p>
      <p>To avoid this scenerio we can use memo </p>
    </section>
  );
}

export default Notes6;
