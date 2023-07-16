const Product = () => {
  return (
    <section className="product">
      <section className="product-main-top">
        <div className="product-text">
          <div className="product-slide">
            <div className="p-s-line"></div>
            <div className="p-s-point p-s-active">
              <p>1</p>
            </div>
            <div className="p-s-point"></div>
            <div className="p-s-point"></div>
            <div className="p-s-point"></div>
            <div className="p-s-point"></div>
            <div className="p-s-nums">
              <p>06</p>
              <p>01</p>
            </div>
          </div>
          <div className="product-con ">
            <h2 className="m-titles">
              Our <span>PRODUCT</span>
            </h2>
            <div className="main-line"></div>
            <ul>
              <li>
                “ Giant Cain turned into a giant cube after his resurrection.
                His large cubic shape encourages him to mercilessly devour any
                prey, underwater or on earth “
              </li>
              <li>
                Giant Cain turned into a giant cube after his resurrection. His
                large cubic shape encourages him to mercilessly devour any prey,
                underwater or on earth.
              </li>
              <li>
                “ Giant Cain turned into a giant cube after his resurrection.
                His large cubic shape encourages him to mercilessly devour any
                prey, underwater or on earth “
              </li>
              <li>
                Giant Cain turned into a giant cube after his resurrection. His
                large cubic shape encourages him to mercilessly devour any prey,
                underwater or on earth.
              </li>
            </ul>
            <a className="link-arrow" href="/">
              <span>Shop Now</span>
              <img
                src={require("../../media/icons/link-arrow.svg").default}
                alt="link arrow icon"
              />
            </a>
          </div>
        </div>
        <div className="product-img"></div>
      </section>
      <section className="product-main-bottom">
        <div>
          <p className="p-m-b-num">01</p>
          <p className="p-m-b-title">Learn more about Cain</p>
          <p className=" ">
            Giant Cain turned into a giant cube after his resurrection. His
            large cubic shape encourages him.
          </p>
        </div>
        <div>
          <p className="p-m-b-num">02</p>
          <p className="p-m-b-title">Learn more about Cain</p>
          <p className=" "></p>
        </div>
        <div>
          <p className="p-m-b-num">03</p>
          <p className="p-m-b-title">Learn more about Cain</p>
          <p className=" "></p>
        </div>
        <div>
          <p className="p-m-b-num">04</p>
          <p className="p-m-b-title">Learn more about Cain</p>
          <p className=" "></p>
        </div>
      </section>
    </section>
  );
};

export default Product;
