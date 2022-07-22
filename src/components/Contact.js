import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

function Contact({
  firstText,
  setFirstText,
  lastText,
  setLastText,
  emailText,
  setEmailText,
  confirmEmailText,
  setConfirmEmailText,
  messageText,
  setMessageText,
}) {
  //Handle Text Changes

  //First Name Input
  const handleChange1 = (e) => {
    setFirstText(e.target.value);
  };

  //Last Name Input
  const handleChange2 = (e) => {
    setLastText(e.target.value);
  };

  //Email Input
  const handleChange3 = (e) => {
    setEmailText(e.target.value);
  };

  //Confirm Email Input
  const handleChange4 = (e) => {
    setConfirmEmailText(e.target.value);
  };

  //Message input
  const handleChange5 = (e) => {
    setMessageText(e.target.value);
  };

  //Form Validation & Message Generator
  const messageGenerator = (e) => {
    e.preventDefault();
    if (
      firstText === "" ||
      lastText === "" ||
      emailText === "" ||
      messageText === ""
    ) {
      alert("Please fill out all fields.");
    } else if (emailText !== confirmEmailText) {
      alert("Please confirm email address.");
    } else {
      console.log(
        emailText + "\n" + firstText + " " + lastText + "\n" + messageText
      );
    }
  };

  return (
    <>
      <h1 style={{ fontSize: "8vw", textAlign: "center", color: "#009503" }}>
        Contact
      </h1>

      <Form
        style={{
          color: "#009503",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "15%",
        }}
      >
        <Row className="mb-3">
          <Col sm="6">
            <Form.Group controlId="formFirstName">
              <Form.Label style={{ marginTop: "5%", fontSize: "3.5vw" }}>
                <span style={{ color: "red", fontSize: "1.5vw" }}>*</span>First
                Name:
              </Form.Label>
              <Form.Control
                style={{
                  fontSize: "3vw",
                }}
                onChange={handleChange1}
                value={firstText}
                type="firstName"
                placeholder="Enter first name"
              />
            </Form.Group>
          </Col>

          <Col sm="6">
            <Form.Group controlId="formLastName">
              <Form.Label
                style={{
                  marginTop: "5%",
                  fontSize: "3.5vw",
                }}
              >
                <span style={{ color: "red", fontSize: "1.5vw" }}>*</span>
                Last Name:
              </Form.Label>
              <Form.Control
                style={{
                  fontSize: "3vw",
                }}
                onChange={handleChange2}
                value={lastText}
                type="lastName"
                placeholder="Enter last name"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm="6">
            <Form.Group
              style={{
                marginTop: "5%",
              }}
              controlId="formEmail"
            >
              <Form.Label
                style={{
                  fontSize: "3.5vw",
                }}
              >
                <span style={{ color: "red", fontSize: "1.5vw" }}>*</span>
                Email:
              </Form.Label>
              <Form.Control
                style={{
                  fontSize: "3vw",
                }}
                onChange={handleChange3}
                value={emailText}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
          </Col>

          <Col sm="6">
            <Form.Group
              style={{
                marginTop: "5%",
              }}
              controlId="formConfirmEmail"
            >
              <Form.Label
                style={{
                  fontSize: "3.5vw",
                }}
              >
                <span style={{ color: "red", fontSize: "1.5vw" }}>*</span>
                Confirm Email:
              </Form.Label>
              <Form.Control
                style={{
                  fontSize: "3vw",
                }}
                onChange={handleChange4}
                value={confirmEmailText}
                type="confirmEmail"
                placeholder="Confirm email"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <Form.Group
              style={{
                marginTop: "5%",
              }}
              className="mb-3"
              controlId="formMessage"
            >
              <Form.Label
                style={{
                  fontSize: "3.5vw",
                }}
              >
                <span style={{ color: "red", fontSize: "1.5vw" }}>*</span>
                Message:
              </Form.Label>
              <Form.Control
                style={{
                  fontSize: "3vw",
                }}
                as="textarea"
                onChange={handleChange5}
                value={messageText}
                placeholder="Please type your message here..."
              />
            </Form.Group>
          </Col>
        </Row>
        <div style={{ textAlign: "center" }}>
          <Button
            style={{
              fontSize: "3.5vw",
              marginTop: "15%",
              backgroundColor: "#009503",
              color: "black",
              border: "none",
            }}
            variant="primary"
            type="submit"
            onClick={messageGenerator}
          >
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}

export { Contact };
