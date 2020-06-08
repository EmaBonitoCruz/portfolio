import React, { useState, useEffect } from "react";
import "./App.css";

// components
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Projects from "./components/Projects";
import Animation from "./components/Animation";
import Photography from "./components/Photography";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="main">
      <LandingPage />
      <div className="container-static">
        <div className="logo-top">
          {/* inserir logo */}
          <p>bonito.</p>
        </div>
        <div id="container-content" className="container-content">
          <div className="container-components">
            <About />
            <Projects />
            <Animation />
            <Photography/>
            <Contacts/>
          </div>
          <div className="right-navigation">
            <a href="#container-about" className="dot"></a>
            <a href="#webprojects" className="dot"></a>
            <a href="#animation" className="dot"></a>
            <a href="#photography" className="dot"></a>
            <a href="#contacts" className="dot"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
