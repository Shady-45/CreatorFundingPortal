import React from "react";
import "../Cascading-Style-Sheets/Script.css";
import movie1 from "../assets/movie1.png";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.jpg";

export default function Script() {
  return (
    <>
      <section className="section section-script">
        <div className="heading-script">
          <h2 className="section-heading">SCRIPT</h2>
          <button className="btn-nav">View More</button>
        </div>
        <div className="cards">
          <div className="card card-1">
            <img className="card-img" src={movie1} alt="" />
            <div className="text-details">
              <div className="firstrow">
                <p className="name">Dao Vinci</p>
                <p className="currency">Current eth</p>
              </div>
              <div className="secondrow">
                <p className="author">
                  <img className="avatar author-img" src={movie1} />
                  <p className="author-name">Rahul</p>
                </p>
                <p className="price">40.89 eTH</p>
              </div>
            </div>
            <button className="btn-script  hero-btn">Buy</button>
          </div>
          <div className="card card-2">
            <img className="card-img" src={movie2} alt="" />
            <div className="text-details">
              <div className="firstrow">
                <p className="name">Fangster</p>
                <p className="currency">Current eth</p>
              </div>
              <div className="secondrow">
                <p className="author">
                  <img className="avatar author-img" src={movie2} />
                  <p className="author-name">david</p>
                </p>
                <p className="price">40.89 eTH</p>
              </div>
            </div>
            <button className="btn-script  hero-btn">Buy</button>
          </div>
          <div className="card card-3">
            <img className="card-img" src={movie3} alt="" />
            <div className="text-details">
              <div className="firstrow">
                <p className="name">Sherbet</p>
                <p className="currency">Current eth</p>
              </div>
              <div className="secondrow">
                <p className="author">
                  <img className="avatar author-img" src={movie3} />
                  <p className="author-name">venkat</p>
                </p>
                <p className="price">40.89 eTH</p>
              </div>
            </div>
            <button className="btn-script  hero-btn">Buy</button>
          </div>
        </div>
      </section>
    </>
  );
}

/* 
import React from "react";
import "../Cascading-Style-Sheets/Script.css";

const Script = () => {
  return <></>;
};

export default Script;
*/
