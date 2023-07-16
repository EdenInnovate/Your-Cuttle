import { forwardRef } from "react";

const Header = forwardRef<HTMLElement>(function MyInput(props, ref) {
  return (
    <header ref={ref} className="animated">
      <section className="header-img">
        <img
          className="header-hero"
          src={require("../../media/images/Frame 2.svg").default}
          alt="octopus"
        />
        <img
          className="header-hero-head"
          src={require("../../media/images/Head.svg").default}
          alt="octopus head"
        />
      </section>
      <section className="header-text">
        <nav>
          <div className="nav-left">
            <div className="logo">
              <img
                src={require("../../media/images/logo.svg").default}
                alt="logo"
              />
            </div>
            <ul>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/">products</a>
              </li>
              <li>
                <a href="/">about us</a>
              </li>
              <li>
                <a href="/">contact us</a>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <div className="nav-right-search">
              <img
                src={require("../../media/icons/search-1.svg").default}
                alt="search icon"
              />
              <input type="search" placeholder="Search..." />
            </div>
            <button>
              <img
                src={require("../../media/icons/bag.svg").default}
                alt="cart icon"
              />
              Cart
            </button>
          </div>
        </nav>
        <div className="header-text-middle">
          <h1>
            <span className="h-l">
              Connect <span>WITH</span>
            </span>
            <span className="h-l2">
              <span>THE</span> Ocean
            </span>
          </h1>
        </div>
        <div className="header-text-bottom">
          <address className="social-media">
            <a href="/">
              <img
                src={require("../../media/icons/facebook-icon.svg").default}
                alt="facebook-icon"
              />
            </a>
            <span></span>
            <a href="/">
              <img
                src={require("../../media/icons/instagram-icon.svg").default}
                alt="instagram-icon"
              />
            </a>
            <span></span>
            <a href="/">
              <img
                src={require("../../media/icons/twitter-icon.svg").default}
                alt="twitter-icon"
              />
            </a>
          </address>
          <div className="scroll-down">
            <img
              // onClick="handleScroll()"
              src={require("../../media/icons/scroll-down-arrows.svg").default}
              alt="scroll-down-arrows icon"
            />
          </div>
        </div>
      </section>
    </header>
  );
});

export default Header;
