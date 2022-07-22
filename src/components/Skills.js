import css from "../images/css.jpeg";
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
          marginTop: "15%",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <img
          className="image-1"
          alt="css"
          src={css}
          style={{ width: "17vw" }}
        />
        <img
          className="image-2"
          alt="css"
          src={css}
          style={{ width: "17vw", marginLeft: "10%", marginRight: "10%" }}
        />
        <img
          className="image-3"
          alt="css"
          src={css}
          style={{ width: "17vw" }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "5%",
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "20%",
        }}
      >
        <img
          className="image-1"
          alt="css"
          src={css}
          style={{ width: "17vw" }}
        />
        <img
          className="image-2"
          alt="css"
          src={css}
          style={{ width: "17vw", marginLeft: "10%", marginRight: "10%" }}
        />
        <img
          className="image-3"
          alt="css"
          src={css}
          style={{ width: "17vw" }}
        />
      </div>
    </>
  );
}

export { Skills };
