import "./Heading.css";
export const Heading = ({ heading }) => {
  return (
    <h2
      id="main-btn"
      className="relative text-3xl md:text-5xl font-normal pb-3 md:pb-5 md:leading-[3.5rem] text-orange w-auto"
    >
      <span className="head relative pb-1 md:pb-3">{heading}</span>
    </h2>
  );
};
