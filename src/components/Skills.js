import cssPic from "../images/css.png";
import htmlPic from "../images/html.png";
import jsPic from "../images/js.png";
import nodeJsPic from "../images/nodejs.png";
import npmPic from "../images/npm.png";

import React from "react";

function Skills() {
  return (
    <>
      <h1
        style={{ fontSize: "8vw", textAlign: "center", color: "#009503" }}
        className="text-skills"
      >
        Skills
      </h1>
      <div
        style={{
          textAlign: "center",
          marginTop: "5%",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <img
          className="image-1"
          alt="html"
          src={htmlPic}
          style={{ width: "17vw" }}
        />
        <img
          className="image-2"
          alt="css"
          src={cssPic}
          style={{ width: "17vw", marginLeft: "10%", marginRight: "10%" }}
        />
        <img
          className="image-3"
          alt="js"
          src={jsPic}
          style={{ width: "17vw" }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "5%",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <img
          className="image-1"
          alt="nodeJS"
          src={nodeJsPic}
          style={{ width: "17vw" }}
        />
        <img
          className="image-2"
          alt="npm"
          src={npmPic}
          style={{ width: "17vw", marginLeft: "10%", marginRight: "10%" }}
        />
        <img
          className="image-3"
          alt="npm"
          src={npmPic}
          style={{ width: "17vw" }}
        />
      </div>
      {/* new div below */}
      <div
        style={{
          textAlign: "center",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "5%",
          marginBottom: "20%",
        }}
      >
        <img
          className="image-1"
          alt="nodeJS"
          src={nodeJsPic}
          style={{ width: "17vw" }}
        />
        <img
          className="image-2"
          alt="npm"
          src={npmPic}
          style={{ width: "17vw", marginLeft: "10%", marginRight: "10%" }}
        />
        <img
          className="image-3"
          alt="npm"
          src={npmPic}
          style={{ width: "17vw" }}
        />
      </div>
    </>
  );
}

export { Skills };
