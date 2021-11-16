import React from "react";

import "./ProjectShowcase.css";
const ProjectShowcase = ({ image }) => {
  return (
    <div
      style={{
        // backgroundImage: `url(${image})`,
        margin: "auto",
        // height: "50vh",
        // width: "50vw",
        textAlign:'center',
        // backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div className="white montserrat" style={{fontSize: '2.5rem'}}>Still under construction :)</div>

      {/* <div className="opacity-layer" />
      <div
        style={{ position: "absolute", bottom: 0, left: 0 }}
        className="white"
      >
        WePlan
      </div> */}
    </div>
  );
};

export default ProjectShowcase;
