import React, { useState, useEffect } from "react";
import "./App.css";

// components
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Projects from "./components/Projects";
import Animation from "./components/Animation";
import Photography from "./components/Photography";
import Contacts from "./components/Contacts";

//images
import Logo from "./assets/img/logo.png";

function App() {
  const [theme, setTheme] = useState("purple");
  const changeTheme = (theme) => {
    setTheme(theme);
  };
  return (
    <div className="main">
      <LandingPage />
      <div className="container-static">
        <div className="logo-top">
          {/* inserir logo */}
          <img src={Logo} />
          <div className="color-changers">
            <a
              onClick={() => {
                changeTheme("purple");
              }}
              style={
                theme === "purple"
                  ? { background: "var(--purple-color)" }
                  : { background: "var(--light-color)" }
              }
              className="dot purple"
            ></a>
            <a
              onClick={() => {
                changeTheme("pink");
              }}
              style={
                theme === "pink"
                  ? { background: "var(--pink-color)" }
                  : { background: "var(--light-color)" }
              }
              className="dot pink"
            ></a>
            <a
              onClick={() => {
                changeTheme("yellow");
              }}
              style={
                theme === "yellow"
                  ? { background: "var(--yellow-color)" }
                  : { background: "var(--light-color)" }
              }
              className="dot yellow"
            ></a>
            <a
              onClick={() => {
                changeTheme("green");
              }}
              style={
                theme === "green"
                  ? { background: "var(--green-color)" }
                  : { background: "var(--light-color)" }
              }
              className="dot green"
            ></a>
            <a
              onClick={() => {
                changeTheme("grey");
              }}
              style={
                theme === "grey"
                  ? { background: "var(--dark-color)" }
                  : { background: "var(--light-color)" }
              }
              className="dot grey"
            ></a>
          </div>
        </div>
        <div id="container-content" className="container-content">
          <div className="container-components">
            <About theme={theme} />
            <Projects theme={theme} />
            <Animation theme={theme} />
            <Photography theme={theme} />
            <Contacts theme={theme} />
          </div>
          <div className="right-navigation">
            <a
              style={
                theme === "purple"
                  ? { border: "2px solid var(--purple-color)" }
                  : theme === "pink"
                  ? { border: "2px solid var(--pink-color)" }
                  : theme === "yellow"
                  ? { border: "2px solid var(--yellow-color)" }
                  : theme === "green"
                  ? { border: "2px solid var(--green-color)" }
                  : theme === "grey"
                  ? { border: "2px solid var(--dark-color)" }
                  : {}
              }
              href="#container-about"
              className="dot"
            ></a>
            <a
              style={
                theme === "purple"
                  ? { border: "2px solid var(--purple-color)" }
                  : theme === "pink"
                  ? { border: "2px solid var(--pink-color)" }
                  : theme === "yellow"
                  ? { border: "2px solid var(--yellow-color)" }
                  : theme === "green"
                  ? { border: "2px solid var(--green-color)" }
                  : theme === "grey"
                  ? { border: "2px solid var(--dark-color)" }
                  : {}
              }
              href="#webprojects"
              className="dot"
            ></a>
            <a
              style={
                theme === "purple"
                  ? { border: "2px solid var(--purple-color)" }
                  : theme === "pink"
                  ? { border: "2px solid var(--pink-color)" }
                  : theme === "yellow"
                  ? { border: "2px solid var(--yellow-color)" }
                  : theme === "green"
                  ? { border: "2px solid var(--green-color)" }
                  : theme === "grey"
                  ? { border: "2px solid var(--dark-color)" }
                  : {}
              }
              href="#animation"
              className="dot"
            ></a>
            <a
              style={
                theme === "purple"
                  ? { border: "2px solid var(--purple-color)" }
                  : theme === "pink"
                  ? { border: "2px solid var(--pink-color)" }
                  : theme === "yellow"
                  ? { border: "2px solid var(--yellow-color)" }
                  : theme === "green"
                  ? { border: "2px solid var(--green-color)" }
                  : theme === "grey"
                  ? { border: "2px solid var(--dark-color)" }
                  : {}
              }
              href="#photography"
              className="dot"
            ></a>
            <a
              style={
                theme === "purple"
                  ? { border: "2px solid var(--purple-color)" }
                  : theme === "pink"
                  ? { border: "2px solid var(--pink-color)" }
                  : theme === "yellow"
                  ? { border: "2px solid var(--yellow-color)" }
                  : theme === "green"
                  ? { border: "2px solid var(--green-color)" }
                  : theme === "grey"
                  ? { border: "2px solid var(--dark-color)" }
                  : {}
              }
              href="#contacts"
              className="dot"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
