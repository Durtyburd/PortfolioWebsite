import { State } from "./State";
import "./stylesheets/app.css";
import React from "react";
import { Particle } from "./components/Particle";

function App() {
  return (
    <div>
      <State />
      <Particle />
    </div>
  );
}

export default App;
