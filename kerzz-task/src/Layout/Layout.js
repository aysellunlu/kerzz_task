import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from "../Images/menubutton.svg";
import Shopping from '../Images/shopping.svg';
import Account from '../Images/account.svg';
import '../Styles/Layout.css';

const Layout = () => {
  return (
    <Container >
        <div className="mt-2 mb-1">
    <Row>
      <Col xs="1"> 
      <img src={Menu} width={40} />
      </Col>
      <Col xs="8"> 
      <div className="layout-text row justify-content-center d-flex align-items-center pt-2">
        Anasayfa
      </div>
      </Col>
      <Col xs="3">
      <Row>
      <Col xs="6"> 
      <img src={Shopping} width={40} />
      </Col>
      <Col xs="6"> 
      <img src={Account} width={40} />
      </Col>
      </Row>
      </Col>
      
    </Row>
    </div>
  </Container>
  );
};

export default Layout;
