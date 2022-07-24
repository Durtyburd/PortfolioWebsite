import React from "react";
import linkedInPic from "../images/linkedin.png";
import githubPic from "../images/github.png";
import "../stylesheets/footer.css";

function Footer() {
  return (
    <div
      style={{
        marginTop: "25%",
        paddingTop: "2%",
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingBottom: "2%",
        backgroundColor: "black",
        width: "100%",
        textAlign: "center",
        borderTop: "2px solid #009503",
      }}
    >
      <h1>
        Want to see the codebase? Then, {""}
        <a
          style={{ textDecorationLine: "none", color: "#009503" }}
          href="https://github.com/Durtyburd/PortfolioWebsite"
        >
          CLICK HERE
        </a>
        .
        <div className="div-footer-logo">
          <a className="a-logos" href="https://github.com/Durtyburd">
            <img alt="GitHub Logo" className="logo-pic1" src={githubPic} />
          </a>
          <a className="a-logos" href="https://www.linkedin.com/in/sethperritt">
            <img alt="LinkedIn Logo" className="logo-pic2" src={linkedInPic} />
          </a>
        </div>
      </h1>
      {/* <a href="https://www.freepik.com/vectors/application-development">
        Application development vector created by upklyak - www.freepik.com
      </a>
      <a href="https://www.freepik.com/vectors/rss">
        Rss vector created by freepik - www.freepik.com
      </a> 
      <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Freepik - Flaticon</a>*/}
    </div>
  );
}

export { Footer };
