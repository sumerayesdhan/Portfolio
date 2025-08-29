import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_9v82mjn",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_4n0ii4v",
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "TQ0ZWWwhL3vXLA37Z"
      );

      if (result?.status === 200) {
        setStatus({ type: "success", message: "Your message was sent successfully!" });
        formRef.current?.reset();
      } else {
        setStatus({ type: "danger", message: "Something went wrong. Please try again." });
      }
    } catch (err) {
      setStatus({ type: "danger", message: "Failed to send. Please try again later." });
    } finally {
      setSending(false);
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Get in <strong className="purple">Touch</strong>
        </h1>
        <p style={{ color: "white", marginBottom: 30 }}>
          I'd love to hear from you. Fill out the form, or reach me at the contacts below.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="mb-4">
            <div className="project-card-view" style={{ padding: 20 }}>
              <h3 className="purple" style={{ marginBottom: 15 }}>Contact Details</h3>
              <p style={{ marginBottom: 8 }}><strong>Mobile:</strong> +91-6381864177</p>
              <p style={{ marginBottom: 8 }}><strong>Email:</strong> sumeraaafreeny@example.com</p>
              <p style={{ marginBottom: 0 }}><strong>Address:</strong> 9/1,GRG Garden,Coimbatore</p>
            </div>
          </Col>

          <Col md={7}>
            <div className="project-card-view" style={{ padding: 20 }}>
              <h3 className="purple" style={{ marginBottom: 15 }}>Send a Message</h3>

              {status.message ? (
                <Alert variant={status.type} onClose={() => setStatus({ type: "", message: "" })} dismissible>
                  {status.message}
                </Alert>
              ) : null}

              <Form ref={formRef} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" name="user_name" placeholder="Your name" required />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" name="user_email" placeholder="you@example.com" required />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" name="subject" placeholder="Subject" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} name="message" placeholder="Write your message here..." required />
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button type="submit" variant="primary" disabled={sending}>
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </Form>

              <div style={{ marginTop: 12, fontSize: 12, opacity: 0.8 }}>
               
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
