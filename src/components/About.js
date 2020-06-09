import React, { Component } from "react";

import ProfileImg from "../assets/img/profilefoto.png";

export default function About({ theme }) {
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
            <img src={ProfileImg} />
          </div>
        </div>
        <div>
          <div className="about-text">
            <p> Hello, my name is Ema Bonito.</p>
            <p>I'm a designer based in Aveiro, Portugal.</p>
            <p>I've made projects in the areas of:</p>
          </div>
          <div className="container-boxes">
            <a href="#webprojects" className="item">
              <span
                style={
                  theme === "purple"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--purple-color) 0%,var(--purple-color) 100%)",
                      }
                    : theme === "pink"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--pink-color) 0%,var(--pink-color) 100%)",
                      }
                    : theme === "yellow"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--yellow-color) 0%,var(--yellow-color) 100%)",
                      }
                    : theme === "green"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--green-color) 0%,var(--green-color) 100%)",
                      }
                    : theme === "grey"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--dark-color) 0%,var(--dark-color) 100%)",
                      }
                    : {}
                }
                className="underline--magical"
              >
                web design
              </span>
            </a>
            <a href="#webprojects" className="item">
              <span
                style={
                  theme === "purple"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--purple-color) 0%,var(--purple-color) 100%)",
                      }
                    : theme === "pink"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--pink-color) 0%,var(--pink-color) 100%)",
                      }
                    : theme === "yellow"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--yellow-color) 0%,var(--yellow-color) 100%)",
                      }
                    : theme === "green"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--green-color) 0%,var(--green-color) 100%)",
                      }
                    : theme === "grey"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--dark-color) 0%,var(--dark-color) 100%)",
                      }
                    : {}
                }
                className="underline--magical"
              >
                web development
              </span>
            </a>
            <a href="#animation" className="item">
              <span
                style={
                  theme === "purple"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--purple-color) 0%,var(--purple-color) 100%)",
                      }
                    : theme === "pink"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--pink-color) 0%,var(--pink-color) 100%)",
                      }
                    : theme === "yellow"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--yellow-color) 0%,var(--yellow-color) 100%)",
                      }
                    : theme === "green"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--green-color) 0%,var(--green-color) 100%)",
                      }
                    : theme === "grey"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--dark-color) 0%,var(--dark-color) 100%)",
                      }
                    : {}
                }
                className="underline--magical"
              >
                animation
              </span>
            </a>
            <a href="#photography" className="item">
              <span
                style={
                  theme === "purple"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--purple-color) 0%,var(--purple-color) 100%)",
                      }
                    : theme === "pink"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--pink-color) 0%,var(--pink-color) 100%)",
                      }
                    : theme === "yellow"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--yellow-color) 0%,var(--yellow-color) 100%)",
                      }
                    : theme === "green"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--green-color) 0%,var(--green-color) 100%)",
                      }
                    : theme === "grey"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--dark-color) 0%,var(--dark-color) 100%)",
                      }
                    : {}
                }
                className="underline--magical"
              >
                photography
              </span>
            </a>
            <a className="item">
              <span
                style={
                  theme === "purple"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--purple-color) 0%,var(--purple-color) 100%)",
                      }
                    : theme === "pink"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--pink-color) 0%,var(--pink-color) 100%)",
                      }
                    : theme === "yellow"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--yellow-color) 0%,var(--yellow-color) 100%)",
                      }
                    : theme === "green"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--green-color) 0%,var(--green-color) 100%)",
                      }
                    : theme === "grey"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--dark-color) 0%,var(--dark-color) 100%)",
                      }
                    : {}
                }
                className="underline--magical"
              >
                image montage
              </span>
            </a>
            <a className="item">
              <span
                style={
                  theme === "purple"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--purple-color) 0%,var(--purple-color) 100%)",
                      }
                    : theme === "pink"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--pink-color) 0%,var(--pink-color) 100%)",
                      }
                    : theme === "yellow"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--yellow-color) 0%,var(--yellow-color) 100%)",
                      }
                    : theme === "green"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--green-color) 0%,var(--green-color) 100%)",
                      }
                    : theme === "grey"
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg,var(--dark-color) 0%,var(--dark-color) 100%)",
                      }
                    : {}
                }
                className="underline--magical"
              >
                video editing
              </span>
            </a>
          </div>
          <div className="block-text right">
            <p>check my work.</p>
            <p>check my work.</p>
            <p>check my work.</p>
            <p>check my work.</p>
            <p>check my work.</p>
            <p>check my work.</p>
            <p>check my work.</p>
            <p>check my work.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
