import React from "react";

import Contact from "./Contact";
import Work from "./Work";
import "./new.css";
function Main() {
  return (
    <div className="main">
    <div class="row">
      <div class="column">
        <h1 className="hero_title">I am</h1>
        <h1 className="hero_title1">SHUBHAM</h1>
        <div className="Cn">
    <Contact />
    </div>
      </div>
      <div class="column2">
      <Work />
      </div>

     

     
    </div>
   
    </div>
  );
}

export default Main;
