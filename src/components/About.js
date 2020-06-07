import React, { Component } from "react";

import ProfileImg from "../assets/img/profilefoto.png";

export default function About() {
  return (
    <div id="container-about" className="container">
      <div className="title">
        <p>ABOUT</p>
      </div>
      <div className="about-content">
        <div>
          <div className="block-text">
            <p>ABOUT ME.</p>
            <p>ABOUT ME.</p>
            <p>ABOUT ME.</p>
            <p>ABOUT ME.</p>
            <p>ABOUT ME.</p>
            <p>ABOUT ME.</p>
            <p>ABOUT ME.</p>
            <p>ABOUT ME.</p>
          </div>
          <div className="about-img">
            <img src={ProfileImg}/>
          </div>
        </div>
        <div>
          <div className="about-text">
            <p> Hello, my name is Ema Bonito.</p>
            <p>I'm a designer based in Aveiro, Portugal.</p>
            <p>I've made projects in the areas of:</p>
          </div>
          <div className="container-boxes">
            <div className="moving-box">
              <p>web design</p>
            </div>
            <div className="moving-box">
              <p>web development</p>
            </div>
            <div className="moving-box">
              <p>animation</p>
            </div>
            <div className="moving-box">
              <p>photography</p>
            </div>
            <div className="moving-box">
              <p>image montage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
