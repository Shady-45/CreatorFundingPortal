import React from "react";
import "../Cascading-Style-Sheets/Movie.css";
import movie1 from "../assets/movie1.mp4";
import movieAvatar1 from "../assets/movie1.png";
import movie2 from "../assets/movie2.mp4";
import movieAvatar2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.mp4";
import movieAvatar3 from "../assets/movie3.jpg";

export default function Movie() {
  return (
    <section className="section section-movie">
      <h1 className="section-heading heading-movie">Hot NFTs</h1>
      <div className="cards">
        <div className="card card-1">
          <video
            className="card-img"
            src={movie1}
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            playsinline=""
            type="video/mp4"
          ></video>
          <div className="text-details">
            <div className="firstrow">
              <p className="name">Dao Vinci</p>
              <p className="currency">Current eth</p>
            </div>
            <div className="secondrow">
              <p className="author">
                <img className="avatar author-img" src={movieAvatar1} />
                <p className="author-name">austin</p>
              </p>
              <p className="price">40.89 eTH</p>
            </div>
          </div>
          <button className="btn-movie  hero-btn">Contribute</button>
        </div>
        <div className="card card-2">
          <video
            className="card-img"
            src={movie2}
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            playsinline=""
            type="video/mp4"
          ></video>
          <div className="text-details">
            <div className="firstrow">
              <p className="name">Fangster</p>
              <p className="currency">Current eth</p>
            </div>
            <div className="secondrow">
              <p className="author">
                <img className="avatar author-img" src={movieAvatar2} />
                <p className="author-name">david</p>
              </p>
              <p className="price">40.89 eTH</p>
            </div>
          </div>
          <button className="btn-movie  hero-btn">Contribute</button>
        </div>
        <div className="card card-3">
          <video
            className="card-img"
            src={movie3}
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            playsinline=""
            type="video/mp4"
          ></video>
          <div className="text-details">
            <div className="firstrow">
              <p className="name">Sherbet</p>
              <p className="currency">Current eth</p>
            </div>
            <div className="secondrow">
              <p className="author">
                <img className="avatar author-img" src={movieAvatar3} />
                <p className="author-name">kumar</p>
              </p>
              <p className="price">40.89 eTH</p>
            </div>
          </div>
          <button className="btn-movie  hero-btn">Contribute</button>
        </div>
      </div>
    </section>
  );
}
