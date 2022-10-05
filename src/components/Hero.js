import React from "react";
import "../Cascading-Style-Sheets/Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="left-text">
          <h1 className="main-heading">
            Discover a New Era of Crypto Currency
          </h1>
          <p className="sub-text">
            met nft the primier marketplace for NFT, which are digital items you
            can truly own. Digital items have existed for a long time, but never
            like this. eg: movies,musics,scripts etc..
          </p>
          <button className="hero-btn">Get Started</button>
        </div>
        <div className="right-img"></div>
      </section>
    </>
  );
};

export default Hero;
