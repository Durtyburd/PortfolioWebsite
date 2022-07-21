import React from "react";

function Footer() {
  return (
    <div
      style={{
        marginTop: "25%",
        paddingTop: "2%",
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingBottom: "2%",
        position: "absolute",
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
      </h1>
    </div>
  );
}

export { Footer };
