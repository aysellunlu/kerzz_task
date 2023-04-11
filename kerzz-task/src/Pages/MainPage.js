import React, { Fragment } from "react";
import "../Styles/MainPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SearcBox from "../Component/SearcBox";
import Card from "../Component/Card";

const MainPage = () => {
  return (
    <Fragment>
    <SearcBox/>
    <div className="container title mb-2 mt-1">
        Sonuçlar
    </div>
    <Card/>
    </Fragment>

  );
};

export default MainPage;
