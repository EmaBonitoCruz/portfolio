import React, { Component } from "react";

import Anim1 from "../assets/img/anim1.gif";
import Freeze1 from "../assets/img/freeze1.jpg";
import Anim2 from "../assets/img/anim2.gif";
import Freeze2 from "../assets/img/freeze2.jpg";
import Anim3 from "../assets/img/anim3.gif";
import Freeze3 from "../assets/img/freeze3.jpg";
import Anim4 from "../assets/img/anim4.gif";
import Freeze4 from "../assets/img/freeze4.jpg";
import Anim5 from "../assets/img/anim5.gif";
import Freeze5 from "../assets/img/freeze5.jpg";
import Anim6 from "../assets/img/anim6.gif";
import Freeze6 from "../assets/img/freeze6.jpg";
import Anim7 from "../assets/img/anim7.gif";
import Freeze7 from "../assets/img/freeze7.jpg";
import Anim8 from "../assets/img/anim8.gif";
import Freeze8 from "../assets/img/freeze8.jpg";

export default function Animation() {
  return (
    <div id="animation" className="container container-small">
      <div className="container-title">
        <p className="title">ANIMATION</p>
      </div>
      <div className="container-animations">
        <div className="animation-block">
          <img class="static" src={Freeze1} />
          <img class="active" src={Anim1} />
        </div>
        <div className="animation-block">
          <img class="static" src={Freeze2} />
          <img class="active" src={Anim2} />
        </div>
        <div className="animation-block">
          <img class="static" src={Freeze3} />
          <img class="active" src={Anim3} />
        </div>
        <div className="animation-block">
          <img class="static" src={Freeze4} />
          <img class="active" src={Anim4} />
        </div>
        <div className="animation-block">
          <img class="static" src={Freeze5} />
          <img class="active" src={Anim5} />
        </div>
        <div className="animation-block">
          <img class="static" src={Freeze6} />
          <img class="active" src={Anim6} />
        </div>
        <div className="animation-block">
          <img class="static" src={Freeze7} />
          <img class="active" src={Anim7} />
        </div>
        <div className="animation-block">
          <img class="static" src={Freeze8} />
          <img class="active" src={Anim8} />
        </div>
      </div>
    </div>
  );
}
