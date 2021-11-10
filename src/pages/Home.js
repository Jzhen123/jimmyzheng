import React from "react";

import ScrollArrow from "../components/ScrollArrow";
import "./Home.css";
export default () => {
  return (
    <div id="background">
      <div id="name" class="nameAnimation">
        <div class="white montserrat mask">
          <div>Jimmy Zheng</div>
        </div>
      </div>

      <div id="subName" class="subNameAnimation">
        <div class="white montserrat mask">
          <div>Software Developer</div>
        </div>
      </div>
      
      <ScrollArrow />
    </div>
  );
};
