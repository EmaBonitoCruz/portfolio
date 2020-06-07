import React, { useState, useEffect } from "react";
import "./App.css";

// components
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Projects from "./components/Projects";

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
            <div id="test-scroll"></div>
          </div>
          <div className="right-navigation">
            <a href="#container-about" className="dot"></a>
            <a href="#projects" className="dot"></a>
            <a href="#test-scroll" className="dot"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
