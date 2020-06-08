import React, { Component } from "react";

import Photo1 from "../assets/img/photo1.JPG";
import Photo2 from "../assets/img/photo2.JPG";
import Photo3 from "../assets/img/photo4.JPG";
import Photo4 from "../assets/img/photo5.jpg";
import Photo5 from "../assets/img/photo6.jpg";
import Photo6 from "../assets/img/photo7.jpg";
import Photo7 from "../assets/img/photo8.jpeg";
import Photo8 from "../assets/img/photo9.jpeg";
import Photo9 from "../assets/img/photo10.jpeg";

export default function Photography() {
  let photos = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
  ];
  return (
    <div id="photography" className="container container-100">
      <div className="container-title">
        <p className="title">photography</p>
      </div>
      <marquee
        className="container-photography"
        behavior="scroll"
        direction="left"
        scrollamount="10"
        loop="infinite"
        onmouseover="this.stop();"
        onmouseout="this.start();"
      >
        {photos.map((photo) => {
          return <img src={photo} />;
        })}
      </marquee>
    </div>
  );
}
