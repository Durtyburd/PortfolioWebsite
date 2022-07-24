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
  subjectText,
  setSubjectText,
  messageText,
  setMessageText,
  validated,
  setValidated,
  formData,
  updateFormData,
}) {
  //Form Validation

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      setValidated(true);
    } else {
      formButtonSubmit();
    }
    //Remove line below to refresh form on submit
    event.preventDefault();
  };

  //Handle Text Changes
  //First Name Input
  const handleChange1 = (e) => {
    setFirstText(e.target.value);
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  //Last Name Input
  const handleChange2 = (e) => {
    setLastText(e.target.value);
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  //Email Input
  const handleChange3 = (e) => {
    setEmailText(e.target.value);
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  //Confirm Email Input
  const handleChange4 = (e) => {
    setSubjectText(e.target.value);
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  //Message input
  const handleChange5 = (e) => {
    setMessageText(e.target.value);
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  //Button Submit
  const formButtonSubmit = (e) => {
    alert(`Thank you for your message. Your query has been forwarded.`);
    const templateId = "template_c9zt4dg";
    const serviceID = "service_rtrp0dl";
    sendFeedback(serviceID, templateId, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
    console.log(formData);
  };

  //Send Feedback
  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log(res);
        console.log("Email successfully sent!");
      })
      .catch((err) => console.error("There has been an Error.", err));
  };

  return (
    <>
      <h1
        className="contact-text"
        style={{ fontSize: "8vw", textAlign: "center", color: "#009503" }}
      >
        Contact
      </h1>

      <Form
        style={{
          color: "#009503",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "5%",
        }}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Col sm="6">
            <Form.Group controlId="formFirstName">
              <Form.Label style={{ marginTop: "5%", fontSize: "3.5vw" }}>
                First Name:
              </Form.Label>
              <Form.Control
                style={{
                  fontSize: "3vw",
                }}
                required
                name="firstName"
                onChange={handleChange1}
                value={firstText}
                type="firstName"
                placeholder="Enter first name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your first name.
              </Form.Control.Feedback>
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
                Last Name:
              </Form.Label>
              <Form.Control
                style={{
                  fontSize: "3vw",
                }}
                required
                name="lastName"
                onChange={handleChange2}
                value={lastText}
                type="lastName"
                placeholder="Enter last name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your last name.
              </Form.Control.Feedback>
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
              controlId="formEmail"
            >
              <Form.Label
                style={{
                  fontSize: "3.5vw",
                }}
              >
                Email:
              </Form.Label>
              <Form.Control
                style={{
                  fontSize: "3vw",
                }}
                required
                name="email"
                onChange={handleChange3}
                value={emailText}
                placeholder="Please type your email here..."
              />
              <Form.Control.Feedback type="invalid">
                Please enter your email.
              </Form.Control.Feedback>
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
              controlId="formSubject"
            >
              <Form.Label
                style={{
                  fontSize: "3.5vw",
                }}
              >
                Subject:
              </Form.Label>
              <Form.Control
                style={{
                  fontSize: "3vw",
                }}
                required
                name="subject"
                onChange={handleChange4}
                value={subjectText}
                placeholder="Please type your subject here..."
              />
              <Form.Control.Feedback type="invalid">
                Please enter a subject.
              </Form.Control.Feedback>
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
                Message:
              </Form.Label>
              <Form.Control
                style={{
                  fontSize: "3vw",
                }}
                required
                name="message"
                as="textarea"
                onChange={handleChange5}
                value={messageText}
                placeholder="Please type your message here..."
              />
              <Form.Control.Feedback type="invalid">
                Please enter a message.
              </Form.Control.Feedback>
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
          >
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}

export { Contact };
