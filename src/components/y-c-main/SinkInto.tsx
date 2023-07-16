const SinkInto = () => {
  return (
    <section className="skin-into animated active" id="skin_into">
      <div className="skin-into-text">
        <h2 className="m-titles">
          <span>SINK INTO</span> <br />
          Cuttlefish World
        </h2>
        <div className="main-line"></div>
        <ul>
          <li>
            <span> They Can Mimic Objects Around Them </span> They Can Mimic
            Objects Around Them
          </li>
          <li>
            <span> They Have Impressive Vision </span> For colorblind creatures,
            cuttlefish have remarkable vision. They have the ability to perceive
            polarized light, which provides them with an enhanced capacity to
            detect prey.
          </li>
          <li>
            <span> Cuttlefish Change Color To Match Their Surroundings </span>
            In order to blend in with their environment, cuttlefish can change
            their skin color in a flash — in less than one second.
          </li>
          <li>
            <span>They Can Count </span> Cuttlefish are known for their
            intelligence, and when it comes to counting shrimp, they truly
            shine. A study found that one-month-old cuttlefish could easily tell
            the difference between a box with four shrimp and a box with five
            shrimp.
          </li>
        </ul>
        <a className="link-arrow" href="/">
          <span>Read More</span>
          <img
            src={require("../../media/icons/link-arrow.svg").default}
            alt="link arrow icon"
          />
        </a>
      </div>
      <div className="skin-into-img"></div>
    </section>
  );
};

export default SinkInto;
