import React, { Component } from "react";

import ProfileImg from "../assets/img/profilefoto.png";

export default function About() {
  return (
    <div id="container-about" className="container">
      <div className="container-title">
        <p className="title">ABOUT</p>
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
            <a href="#webprojects" className="moving-box">
              <p>web design</p>
            </a>
            <a href="#webprojects" className="moving-box">
              <p>web development</p>
            </a>
            <a href="#animation" className="moving-box">
              <p>animation</p>
            </a>
            <a href="#photography" className="moving-box">
              <p>photography</p>
            </a>
            <div className="moving-box">
              <p>image montage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
