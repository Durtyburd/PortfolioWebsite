import { About } from "./components/About";
import { NavbarMain } from "./components/NavbarMain";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

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
  const [subjectText, setSubjectText] = useState("");

  //Message Text Handler
  const [messageText, setMessageText] = useState("");

  //Form Validator
  const [validated, setValidated] = useState(false);

  //Projects Carousel Interval
  const [index, setIndex] = useState(0);

  //Initial Form Data
  const initialFormData = Object.freeze({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  //Form Data
  const [formData, updateFormData] = useState(initialFormData);

  return (
    //Page Layout
    <div>
      <NavbarMain />
      <About />
      <Skills />
      <Projects index={index} setIndex={setIndex} />
      <Contact
        firstText={firstText}
        setFirstText={setFirstText}
        lastText={lastText}
        setLastText={setLastText}
        emailText={emailText}
        setEmailText={setEmailText}
        subjectText={subjectText}
        setSubjectText={setSubjectText}
        messageText={messageText}
        setMessageText={setMessageText}
        validated={validated}
        setValidated={setValidated}
        formData={formData}
        updateFormData={updateFormData}
      />
      <Footer />
    </div>
  );
}

export { State };
