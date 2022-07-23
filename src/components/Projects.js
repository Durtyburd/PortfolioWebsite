import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from "react";
import placeholder from "../images/placeholder.jpg";

import "../stylesheets/projects.css";

function Projects({ index, setIndex }) {
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <h1
        className="project-text"
        style={{
          fontSize: "8vw",
          textAlign: "center",
          color: "#009503",
        }}
      >
        Projects
      </h1>

      <Carousel
        style={{
          textAlign: "center",
          marginTop: "5%",
          marginBottom: "20%",
          borderTop: "2px solid #009503",
          borderBottom: "2px solid #009503",
        }}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={placeholder} alt="First slide" />
          <Carousel.Caption>
            <h1 style={{ fontSize: "6vw" }}>To Do List</h1>
            <h1 style={{ fontSize: "3.5vw" }}>
              A CRUD application utilizing HTML5, CSS3, ReactJS, Java, Maven,
              and HTTP API's.
            </h1>
            <Button
              style={{
                fontSize: "3.5vw",
                marginTop: "5%",
                backgroundColor: "#009503",
                color: "black",
                border: "none",
              }}
              variant="primary"
              type="submit"
              href="https://github.com/Durtyburd/TerminalToDoList"
            >
              Let's Go!
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={placeholder} alt="Second slide" />

          <Carousel.Caption>
            <h1 style={{ fontSize: "6vw" }}>Lorem Ipsum</h1>
            <h1 style={{ fontSize: "3.5vw" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h1>
            <Button
              style={{
                fontSize: "3.5vw",
                marginTop: "5%",
                backgroundColor: "#009503",
                color: "black",
                border: "none",
              }}
              variant="primary"
              type="submit"
              href="#"
            >
              COMING SOON
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={placeholder} alt="Third slide" />

          <Carousel.Caption>
            <h1 style={{ fontSize: "6vw" }}>Lorem Ipsum</h1>
            <h1 style={{ fontSize: "3.5vw" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h1>
            <Button
              style={{
                fontSize: "3.5vw",
                marginTop: "5%",
                backgroundColor: "#009503",
                color: "black",
                border: "none",
              }}
              variant="primary"
              type="submit"
              href="#"
            >
              COMING SOON
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export { Projects };
