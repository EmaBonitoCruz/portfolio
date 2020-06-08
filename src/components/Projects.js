import React, { Component } from "react";

import Monstera from "../assets/img/monstera.png";
import Bits from "../assets/img/8bits.png";
import Beeogarden from "../assets/img/beeogarden.png";
import Helder from "../assets/img/helder.png";
import Mpc from "../assets/img/mpc.png";

export default function Projects() {
  return (
    <div id="webprojects" className="container container-100">
      <div className="container-title">
        <p className="title">WEB.PROJECTS</p>
      </div>
      <div
        className="projects-img"
        // behavior="scroll"
        // direction="left"
        // scrollamount="10"
        // loop="infinite"
      >
        <div className="container-project">
          <a href="https://monstera-b638a.firebaseapp.com/" target="_blank">
            <img className="browser" src={Monstera} />
            <div className="project-description monstera">
              <p>
                Monstera is a plant research platform, buit for plant lovers,
                allowing them to search for species, learn about them and add
                them to a collection.
              </p>
            </div>
          </a>
        </div>
        <div className="container-project">
          <a>
            <img src={Beeogarden} />
            <div className="project-description beeogarden">
              <p>
                Beeogarden is a platform dedicated to helping to save the bees.
                It is a community of people connected by gardens.
              </p>
            </div>
          </a>
        </div>
        <div className="container-project">
          <a>
            <img className="browser" src={Bits} />
            <div className="project-description bits">
              <p>
                8 Bits of Portugal aims to tell a story about some of the most
                iconic places of the country, taking the user in a pixelated
                trip.
              </p>
            </div>
          </a>
        </div>
        <div className="container-project">
          <a>
            <img src={Mpc} />
            <div className="project-description mpc">
              <p>
                Musical Practice Companion is a study helper app, developed for
                music students.
              </p>
            </div>
          </a>
        </div>
        <div className="container-project">
          <a href="https://jogosdohelder.pt" target="_blank">
            <img className="browser" src={Helder} />
            <div className="project-description helder">
              <p>
                This project consists in the creation of a digital platform for
                the business "Jogos do Helder".
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
