import React, { Component } from "react";

import ContactCircle from "../assets/img/contact2.png";

export default function Contacts({theme}) {
  return (
    <div id="contacts" className="container container-100">
      <div className="container-title">
        <p className="title">contacts</p>
      </div>
      <div className="container-contacts">
        <div className="block-text talk">
          <p>let´s talk.</p>
          <p>let´s talk.</p>
          <p>let´s talk.</p>
          <p>let´s talk.</p>
          <p>let´s talk.</p>
          <p>let´s talk.</p>
          <p>let´s talk.</p>
          <p>let´s talk.</p>
        </div>
        <img src={ContactCircle} />
        <div className="form-container">
          <form>
            <div className="form-element">
              <label for="name">Name</label>
              <input id="name" type="text" placeholder="Ex: Ema Bonito"></input>
            </div>
            <div className="form-element">
              <label for="email">Email</label>

              <input
                id="email"
                type="text"
                placeholder="someone@example.com"
              ></input>
            </div>
            <div className="form-element">
              <label for="message">Message</label>

              <input
                id="message"
                type="text"
                placeholder="Write your message here"
              ></input>
              <span class="border"></span>
            </div>
            <button>Send</button>
          </form>
        </div>
        <div className="container-boxes contact-links">
          <a
            href="https://www.linkedin.com/in/ema-bonito"
            className="item"
            target="_blank"
          >
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
              linkedin
            </span>
          </a>
          <a
            href="https://www.behance.net/emacruz"
            className="item"
            target="_blank"
          >
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
              behance
            </span>
          </a>
          <a
            href="https://issuu.com/emabonito/docs/porfoliofinal"
            className="item"
            target="_blank"
          >
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
              portfolio
            </span>
          </a>
          <a href="https://www.facebook.com" className="item" target="_blank">
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
              facebook
            </span>
          </a>
          <a href="https://www.instagram.com" className="item" target="_blank">
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
              instagram
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
