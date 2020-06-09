import React, { Component } from "react";

import Radium from 'radium';

import Monstera from "../assets/img/monstera.png";
import Bits from "../assets/img/8bits.png";
import Beeogarden from "../assets/img/beeogarden.png";
import Helder from "../assets/img/helder.png";
import Mpc from "../assets/img/mpc.png";

export default function Projects({ theme }) {
  return (
    <div id="webprojects" className="container container-100">
      <div className="container-title">
        <p className="title">WEB.PROJECTS</p>
      </div>
      <div className="projects-img">
        <div className="container-project">
          <a href="https://monstera-b638a.firebaseapp.com/" target="_blank">
            <img className="browser" src={Monstera} />
            <div
              style={
                theme === "purple"
                  ? {
                      background: "var(--purple-color)",
                    }
                  : theme === "pink"
                  ? {
                      background: "var(--pink-color)",
                    }
                  : theme === "yellow"
                  ? {
                      background: "var(--yellow-color)",
                    }
                  : theme === "green"
                  ? {
                      background: "var(--green-color)",
                    }
                  : theme === "grey"
                  ? {
                      background: "var(--dark-color)",
                    }
                  : {}
              }
              style={
                theme === "purple"
                  ? {
                      background: "var(--purple-color)",
                    }
                  : theme === "pink"
                  ? {
                      background: "var(--pink-color)",
                    }
                  : theme === "yellow"
                  ? {
                      background: "var(--yellow-color)",
                    }
                  : theme === "green"
                  ? {
                      background: "var(--green-color)",
                    }
                  : theme === "grey"
                  ? {
                      background: "var(--dark-color)",
                    }
                  : {}
              }
              className="project-description monstera"
            >
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
            <div
              style={
                theme === "purple"
                  ? {
                      background: "var(--purple-color)",
                    }
                  : theme === "pink"
                  ? {
                      background: "var(--pink-color)",
                    }
                  : theme === "yellow"
                  ? {
                      background: "var(--yellow-color)",
                    }
                  : theme === "green"
                  ? {
                      background: "var(--green-color)",
                    }
                  : theme === "grey"
                  ? {
                      background: "var(--dark-color)",
                    }
                  : {}
              }
              className="project-description beeogarden"
            >
              <p>
                Beeogarden is a platform dedicated to helping to save the bees.
                It is a community of people connected by gardens.
              </p>
            </div>
          </a>
        </div>
        <div className="container-project">
          <a href="https://emabonitocruz.github.io/8bitsofportugal/examples/" target="_blank">
            <img className="browser" src={Bits} />
            <div
              style={
                theme === "purple"
                  ? {
                      background: "var(--purple-color)",
                    }
                  : theme === "pink"
                  ? {
                      background: "var(--pink-color)",
                    }
                  : theme === "yellow"
                  ? {
                      background: "var(--yellow-color)",
                    }
                  : theme === "green"
                  ? {
                      background: "var(--green-color)",
                    }
                  : theme === "grey"
                  ? {
                      background: "var(--dark-color)",
                    }
                  : {}
              }
              className="project-description bits"
            >
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
            <div
              style={
                theme === "purple"
                  ? {
                      background: "var(--purple-color)",
                    }
                  : theme === "pink"
                  ? {
                      background: "var(--pink-color)",
                    }
                  : theme === "yellow"
                  ? {
                      background: "var(--yellow-color)",
                    }
                  : theme === "green"
                  ? {
                      background: "var(--green-color)",
                    }
                  : theme === "grey"
                  ? {
                      background: "var(--dark-color)",
                    }
                  : {}
              }
              className="project-description mpc"
            >
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
            <div
              style={
                theme === "purple"
                  ? {
                      background: "var(--purple-color)",
                    }
                  : theme === "pink"
                  ? {
                      background: "var(--pink-color)",
                    }
                  : theme === "yellow"
                  ? {
                      background: "var(--yellow-color)",
                    }
                  : theme === "green"
                  ? {
                      background: "var(--green-color)",
                    }
                  : theme === "grey"
                  ? {
                      background: "var(--dark-color)",
                    }
                  : {}
              }
              className="project-description helder"
            >
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
