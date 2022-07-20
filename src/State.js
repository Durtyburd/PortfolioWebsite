import { About } from "./components/About";
import { NavbarMain } from "./components/NavbarMain";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Particle } from "./components/Particle";

import React, { useState } from "react";

function State() {
  //Form Validation State

  //First Name Text Handler
  const [firstText, setFirstText] = useState("");

  //Last Name Text Handler
  const [lastText, setLastText] = useState("");

  //Email Text Handler
  const [emailText, setEmailText] = useState("");

  //Email Confirmation Text Handler
  const [confirmEmailText, setConfirmEmailText] = useState("");

  //Message Text Handler
  const [messageText, setMessageText] = useState("");

  return (
    //Page Layout
    <div>
      <NavbarMain />
      <About />
      <Skills />
      <Projects />
      <Contact
        firstText={firstText}
        setFirstText={setFirstText}
        lastText={lastText}
        setLastText={setLastText}
        emailText={emailText}
        setEmailText={setEmailText}
        confirmEmailText={confirmEmailText}
        setConfirmEmailText={setConfirmEmailText}
        messageText={messageText}
        setMessageText={setMessageText}
      />
      <Footer />
      <Particle />
    </div>
  );
}

export { State };
