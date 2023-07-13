import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const ref = useRef<any>(null)
  const handleScroll=()=> {
    ref.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    })
  }
  return (
    <>
          <script src="./site.js"></script>
          <header className="animated">
      <section className="header-img">
        <img className="header-hero" src="./images/Frame 2.svg" alt="octopus" />
        <img
          className="header-hero-head"
          src="./images/Head.svg"
          alt="octopus head"
        />
      </section>
      <section className="header-text">
        <nav>
          <div className="nav-left">
            <div className="logo">
              <img src="./images/logo.svg" alt="logo" />
            </div>
            <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">products</a></li>
              <li><a href="#">about us</a></li>
              <li><a href="#">contact us</a></li>
            </ul>
          </div>
          <div className="nav-right">
            <div className="nav-right-search">
              <img src="./images/search-1.svg" alt="search icon" />
              <input type="search" placeholder="Search..." />
            </div>
            <button>
              <img src="./images/bag.svg" alt="cart icon" />
              Cart
            </button>
          </div>
        </nav>
        <div className="header-text-middle">
          <h1>
            <span className="h-l">Connect <span>WITH</span></span>
            <span className="h-l2"><span>THE</span> Ocean</span>
          </h1>
        </div>
        <div className="header-text-bottom">
          <address className="social-media">
            <a href="#">
              <img src="./images/facebook-icon.svg" alt="facebook-icon" />
            </a>
            <span></span>
            <a href="#">
              <img src="./images/instagram-icon.svg" alt="instagram-icon" />
            </a>
            <span></span>
            <a href="#">
              <img src="./images/twitter-icon.svg" alt="twitter-icon" />
            </a>
          </address>
          <div className="scroll-down">
            <img
            ref={ref}
              onClick={handleScroll}
              src="./images/scroll-down-arrows.svg"
              alt="scroll-down-arrows icon"
            />
          </div>
        </div>
      </section>
    </header>


      <section className="skin-into animated" id="skin_into">
        <div className="skin-into-text">
          <h2 className="m-titles">
            <span>SINK INTO</span> <br />Cuttlefish World
          </h2>
          <div className="main-line"></div>
          <ul>
            <li>
              <span> They Can Mimic Objects Around Them </span> They Can Mimic
              Objects Around Them
            </li>
            <li>
              <span> They Have Impressive Vision </span> For colorblind
              creatures, cuttlefish have remarkable vision. They have the
              ability to perceive polarized light, which provides them with an
              enhanced capacity to detect prey.
            </li>
            <li>
              <span> Cuttlefish Change Color To Match Their Surroundings </span>
              In order to blend in with their environment, cuttlefish can change
              their skin color in a flash — in less than one second.
            </li>
            <li>
              <span>They Can Count </span> Cuttlefish are known for their
              intelligence, and when it comes to counting shrimp, they truly
              shine. A study found that one-month-old cuttlefish could easily
              tell the difference between a box with four shrimp and a box with
              five shrimp.
            </li>
          </ul>
          <a className="link-arrow" href="#"
            ><span>Read More</span
            ><img src="./images/link-arrow.svg" alt="link arrow icon"
          /></a>
        </div>
        <div className="skin-into-img"></div>
      </section>

      <section className="gaint-cain animated">
        <div className="gaint-cain-img"></div>
        <div className="gaint-cain-text">
          <h2 className="m-titles"><span>GIANT</span> Cain</h2>
          <div className="main-line"></div>
          <p>
            the cuttlefish notice a torn wire generating firecrackers. Fire.
          </p>
          <p>
            It was the first time his eyes fell on fire. Watching that fire
            ignited curiosity in the cuttlefish to touch the fire going on.
          </p>
          <p>
            <span>BOOOOM!</span> a tsunami of colors suddenly appeared which
            startled the cuttlefish
          </p>
          <p>
            Cuttlefish got hypnotized by the lights, transcending the physical
            world which opened an illusionary portal to an unknown universe to
            its lost soul…
          </p>
          <p>
            Cain lost its body, while keeping its cuttlebone its soul invaded
            respectively new random
          </p>
        </div>
      </section>

   
      
    </>
  );
}

export default App;
