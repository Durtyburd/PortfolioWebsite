import "../stylesheets/about.css";
import programmer from "../images/programmer.png";

function About() {
  return (
    <div className="programmer-pic-div">
      <h1 className="text-1">
        Hello,<br></br> my name is
        <span className="text-name"> Seth Perritt</span>.
      </h1>
      <img alt="pic of programmer" className="programmer-1" src={programmer} />
      <h1 className="text-2">
        I am a self-taught{" "}
        <span style={{ color: "#009503" }}>Web Developer</span>, with a passion
        for learning new technologies.
      </h1>
      <hr></hr>
    </div>
  );
}

export { About };
