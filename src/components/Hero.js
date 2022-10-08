import React from "react";
import "../Cascading-Style-Sheets/Hero.css";
import BinanceImage from "../assets/binance.png";
import CoinwalletImage from "../assets/coin-wallet.png";
import ScriptImage from "../assets/script-nft.png";
import ScriptImageTwo from "../assets/script-2.png";
import ScriptImageThree from "../assets/script-3.png";
import ProfileImage from "../assets/bg.png";

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
      <article>
        <img src={BinanceImage} alt="" />
        <img src={CoinwalletImage} alt="" />
        <img src={CoinwalletImage} alt="" />
        <img src={CoinwalletImage} alt="" />
        <img src={CoinwalletImage} alt="" />
      </article>
      <div className="script">
        <h1>Script</h1>
        <button>View More</button>
      </div>
      <div className="script-items">
        <div className="script-item">
          <img src={ScriptImage} alt="" />
          <div className="name-currency">
            <p className="name">name1</p>
            <p className="currency">Currency</p>
          </div>
          <div className="img-name-amount">
            <div className="img-name-amount">
              {" "}
              <img src={ProfileImage} alt="human" />
              <h3>Manish</h3>
            </div>

            <p>4000</p>
          </div>
          <button className="btn-profile">Buy</button>
        </div>
        <div className="script-item">
          <img src={ScriptImageTwo} alt="" />
          <div className="name-currency">
            <p className="name">name1</p>
            <p className="currency">Currency</p>
          </div>
          <div className="img-name-amount">
            <div className="image-person">
              <img src={ProfileImage} alt="human" />
              <h3>Manish</h3>
            </div>

            <p>4000</p>
          </div>
          <button className="btn-profile">Buy</button>
        </div>
        <div className="script-item">
          <img src={ScriptImageThree} alt="" />
          <div className="name-currency">
            <p className="name">name1</p>
            <p className="currency">Currency</p>
          </div>
          <div className="img-name-amount">
            <div className="image-person">
              <img src={ProfileImage} alt="human" />
              <h3>Manish</h3>
            </div>

            <p>4000</p>
          </div>
          <button className="btn-profile">Buy</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
