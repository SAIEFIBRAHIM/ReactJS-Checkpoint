import React from "react";
import "../css/Cform.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Cform = () => {

  
  return (
    <div className="contti">
    <Form className="cform">
      <p className="hform">Hire me</p>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Your Company</Form.Label>
          <Form.Control type="name" placeholder="Enter Company Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-1">
        <Form.Group as={Col} controlId="formGridTextArea">
          <Form.Label>Tell me about the opportunity</Form.Label>
          <Form.Control
            className="txtar"
            as="textarea"
            rows={3}
            placeholder="..."
          />
        </Form.Group>
      </Row>
      <div class="contt">
        <Button variant="light" type="submit">
          Submit
        </Button>
      </div>
    </Form>
    <h6 className="copyr">Copyright &copy; 2022 Saief Brahim, All rights are reserved.</h6>
    </div>
  );
};

export default Cform;
