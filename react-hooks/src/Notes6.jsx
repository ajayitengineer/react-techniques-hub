function Notes6() {
  return (
    <section className="notes">
      <p>
        In React, when a parent component re-renders (due to state/prop change),
        all of its child components also re-render by default. To avoid
        unnecessary re-renders of child components (when their props haven’t
        changed), we can wrap them with{" "}
        <span className="highlight">React.memo.</span>
      </p>
    </section>
  );
}

export default Notes6;
