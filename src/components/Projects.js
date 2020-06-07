import React, { Component } from "react";

import Monstera from "../assets/img/monstera.png";
import Bits from "../assets/img/8bits.png";
import Beeogarden from "../assets/img/beeogarden.png";
import Helder from "../assets/img/helder.png";
import Mpc from "../assets/img/mpc.png";

export default function Projects() {
  return (
    <div id="projects" className="container">
      <div className="title">
        <p>PROJECTS</p>
      </div>
      <marquee
        className="projects-img"
        behavior="scroll"
        direction="left"
        scrollamount="10"
        loop="infinite"
      >
        <div className="container-project">
          <a>
            <img className="browser" src={Monstera} />
            <p className="project-description">
              Monstera is a plant research platform, buit for plant lovers.
            </p>
          </a>
        </div>
        <div className="container-project">
          <a>
            <img src={Beeogarden} />
          </a>
        </div>
        <div className="container-project">
          <a>
            <img className="browser" src={Bits} />
          </a>
        </div>
        <div className="container-project">
          <a>
            <img src={Mpc} />
          </a>
        </div>
        <div className="container-project">
          <a>
            <img className="browser" src={Helder} />
          </a>
        </div>
      </marquee>
    </div>
  );
}
