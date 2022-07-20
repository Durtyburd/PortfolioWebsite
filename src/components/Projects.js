import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

function Projects() {
  return (
    <>
      <h1 style={{ marginLeft: "10%", color: "#009503" }}>Projects:</h1>
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
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="dark">Go somewhere</Button>
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
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="dark">Go somewhere</Button>
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
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export { Projects };
