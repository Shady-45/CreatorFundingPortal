import React from "react";
import "../Cascading-Style-Sheets/Music.css";
import ScriptImage from "../assets/script-nft.png";
import ScriptImageTwo from "../assets/script-2.png";
import ScriptImageThree from "../assets/script-3.png";
import ProfileImage from "../assets/bg.png";

const Music = () => {
  return (
    <div>
      <div className="script">
        <h1>Music</h1>
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
    </div>
  );
};

export default Music;
