import React from "react";
// import "../Cascading-Style-Sheets/Script.css";
import script1 from "../assets/script1.jpg";
import script2 from "../assets/script2.jpg";
import script3 from "../assets/script3.jpg";

export default function Script() {
  return (
    <>
      <section className="section section-script">
        <div className="heading-script-music">
          <h2 className="section-heading">SCRIPT</h2>
          <button className="btn-nav btn-script-music">View More</button>
        </div>
        <div className="cards">
          <div className="card card-1">
            <img className="card-img" src={script1} alt="" />
            <div className="text-details">
              <div className="firstrow">
                <p className="name">Dao Vinci</p>
                <p className="currency">Current eth</p>
              </div>
              <div className="secondrow">
                <p className="author">
                  <img className="avatar author-img" src={script1} />
                  <p className="author-name">Rahul</p>
                </p>
                <p className="price">40.89 eTH</p>
              </div>
            </div>
            <button className="btn-script-music-buy  hero-btn">Buy</button>
          </div>
          <div className="card card-2">
            <img className="card-img" src={script2} alt="" />
            <div className="text-details">
              <div className="firstrow">
                <p className="name">Fangster</p>
                <p className="currency">Current eth</p>
              </div>
              <div className="secondrow">
                <p className="author">
                  <img className="avatar author-img" src={script2} />
                  <p className="author-name">david</p>
                </p>
                <p className="price">40.89 eTH</p>
              </div>
            </div>
            <button className="btn-script-music-buy  hero-btn">Buy</button>
          </div>
          <div className="card card-3">
            <img className="card-img" src={script3} alt="" />
            <div className="text-details">
              <div className="firstrow">
                <p className="name">Sherbet</p>
                <p className="currency">Current eth</p>
              </div>
              <div className="secondrow">
                <p className="author">
                  <img className="avatar author-img" src={script3} />
                  <p className="author-name">venkat</p>
                </p>
                <p className="price">40.89 eTH</p>
              </div>
            </div>
            <button className="btn-script-music-buy  hero-btn">Buy</button>
          </div>
        </div>
      </section>
    </>
  );
}
