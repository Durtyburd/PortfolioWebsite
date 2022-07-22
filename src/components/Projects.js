import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

function Projects() {
  return (
    <>
      <h1
        style={{
          fontSize: "8vw",
          textAlign: "center",
          color: "#009503",
        }}
      >
        Projects
      </h1>
      <Card
        style={{
          backgroundColor: "#009503",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "15%",
        }}
        className="text-center"
      >
        <Card.Body>
          <Card.Title>To Do List</Card.Title>
          <Card.Text>
            A to-do list that was built with reactjs for the frontend, and the
            backend is written in Java. The project is currently unavaiable due
            to the server being down.
          </Card.Text>
          <Button variant="dark">Server Down</Button>
        </Card.Body>
      </Card>
      <Card
        style={{
          backgroundColor: "#009503",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "5%",
        }}
        className="text-center"
      >
        <Card.Body>
          <Card.Title>Lorem Ipsum</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            ultricies mi quis hendrerit dolor magna eget est. Risus in hendrerit
            gravida rutrum quisque non tellus orci.
          </Card.Text>
          <Button variant="dark">COMING SOON</Button>
        </Card.Body>
      </Card>
      <Card
        style={{
          backgroundColor: "#009503",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "5%",
          marginBottom: "20%",
        }}
        className="text-center"
      >
        <Card.Body>
          <Card.Title>Lorem Ipsum</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            ultricies mi quis hendrerit dolor magna eget est. Risus in hendrerit
            gravida rutrum quisque non tellus orci.
          </Card.Text>
          <Button variant="dark">COMING SOON</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export { Projects };
