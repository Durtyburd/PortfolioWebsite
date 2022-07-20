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
        backgroundColor: "#212529",
        width: "100%",
        textAlign: "center",
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
