import React from "react";
import "../Cascading-Style-Sheets/Movie.css";
import sample from "../assets/sample.png";
import sample2 from "../assets/sample2.jpg";

export default function Movie() {
  return (
    <section className="section section-movie">
      <h1 className="heading">Hot NFTs</h1>
      <h2 className="section-heading">MOVIE</h2>
      <div className="cards">
        <div className="card card-1">
          <img className="card-img" src={sample} alt="" />
          <div className="text-details">
            <div className="firstrow">
              <p className="name">Dao Vinci</p>
              <p className="currency">Current eth</p>
            </div>
            <div className="secondrow">
              <p className="author">
                <img className="avatar author-img" src={sample} />
                <p className="author-name">austin</p>
              </p>
              <p className="price">40.89 eTH</p>
            </div>
          </div>
          <button className="btn-movie  hero-btn">Contribute</button>
        </div>
        <div className="card card-2">
          <div className="card card-1">
            <img className="card-img" src={sample2} alt="" />
            <div className="text-details">
              <div className="firstrow">
                <p className="name">Dao Vinci</p>
                <p className="currency">Current eth</p>
              </div>
              <div className="secondrow">
                <p className="author">
                  <img className="avatar author-img" src={sample2} />
                  <p className="author-name">austin</p>
                </p>
                <p className="price">40.89 eTH</p>
              </div>
            </div>
            <button className="btn-movie  hero-btn">Contribute</button>
          </div>
        </div>
        <div className="card card-3"></div>
      </div>
    </section>
  );
}
