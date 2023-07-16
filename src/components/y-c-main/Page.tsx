import { useEffect, useRef } from "react";
import "../../styles/page_main.css";
import Header from "./Header";
import SinkInto from "./SinkInto";
import { handleScrolling } from "../../libs/handleScrolling";
import SmartLighting from "./SmartLighting";
import Footer from "./Footer";
import Kiddo from "./Kiddo";
import GiantCain from "./GiantCain";
import Product from "./Product";

const Page = () => {
  const headerRef = useRef<any>(null);

  useEffect(() => {
    headerRef.current.classList.add("active");
    window.onscroll = () => handleScrolling();
  }, []);
  return (
    <>
      <Header ref={headerRef} />
      <main>
        <SinkInto />
        {/* <GiantCain />
        <Kiddo />
        <Product />
        <SmartLighting />
        <Footer /> */}
      </main>
    </>
  );
};

export default Page;
