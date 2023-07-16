import KIDDO from "../../media/images/Mask-group.svg";
import BACK from "../../media/images/Vector-12.svg";
const Kiddo = () => {
  return (
    <section className="main-kiddo">
      <div className="kiddo-light">
        <div className="kiddo-light-img">
          <img src={KIDDO} alt="light item" />
        </div>
        {/* <img src={KIDDO} alt="light item" /> */}
      </div>
      <div className="kiddo-text">
        <h2 className="m-titles">
          <span> HELLO, I AM KIDDO.</span>
          <br />
          Your buddy,
          <br /> assistant
        </h2>
        <p>
          They Can Count Cuttlefish are known for their intelligence, and when
          it comes to counting shrimp, they truly shine. A study found that
          one-month-old cuttlefish could easily tell the difference between a
          box with four shrimp and a box with five shrimp.
        </p>
        <img src={BACK} alt="light item" />
      </div>
    </section>
  );
};

export default Kiddo;
