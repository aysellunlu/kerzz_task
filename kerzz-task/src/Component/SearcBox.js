import React from "react";
import "../Styles/SearchBox.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const SearcBox = () => {
  return (
    <Container>
      <div className="text-center pb-3 pt-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicSearch">
            <Form.Control type="text" placeholder="Mekan ara" />
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default SearcBox;
