const Section = ({ title, children, ...additionalProps }) => {
  return (
    <section {...additionalProps}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
