import React from "react";
// import "../Cascading-Style-Sheets/Music.css";
import music1 from "../assets/music1.jpg";
import music2 from "../assets/music2.jpg";
import music3 from "../assets/music3.jpg";

export default function Music() {
  return (
    <>
      <section className="section section-music">
        <div className="heading-script-music">
          <h2 className="section-heading">MUSIC</h2>
          <button className="btn-nav btn-script-music">View More</button>
        </div>
        <div className="cards">
          <div className="card card-1">
            <img className="card-img" src={music1} alt="" />
            <div className="text-details">
              <div className="firstrow">
                <p className="name">Dao Vinci</p>
                <p className="currency">Current eth</p>
              </div>
              <div className="secondrow">
                <p className="author">
                  <img className="avatar author-img" src={music1} />
                  <p className="author-name">Johnson</p>
                </p>
                <p className="price">40.89 eTH</p>
              </div>
            </div>
            <button className="btn-script-music-buy  hero-btn">Buy</button>
          </div>
          <div className="card card-2">
            <img className="card-img" src={music2} alt="" />
            <div className="text-details">
              <div className="firstrow">
                <p className="name">Fangster</p>
                <p className="currency">Current eth</p>
              </div>
              <div className="secondrow">
                <p className="author">
                  <img className="avatar author-img" src={music2} />
                  <p className="author-name">Stephen</p>
                </p>
                <p className="price">40.89 eTH</p>
              </div>
            </div>
            <button className="btn-script-music-buy  hero-btn">Buy</button>
          </div>
          <div className="card card-3">
            <img className="card-img" src={music3} alt="" />
            <div className="text-details">
              <div className="firstrow">
                <p className="name">Sherbet</p>
                <p className="currency">Current eth</p>
              </div>
              <div className="secondrow">
                <p className="author">
                  <img className="avatar author-img" src={music3} />
                  <p className="author-name">Tyson</p>
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
