import React, { Fragment, useEffect, useState } from "react";
import "../Styles/MainPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SearcBox from "../Component/SearcBox";
import CardImage from "../Images/visneli-sarmal.png";
import "../Styles/Card.css";
import Basket from "../Images/shopping_basket.svg";
import Star from "../Images/star.svg";
import axios from "axios";

const MainPage = () => {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    // axios.defaults.headers.common["apiKey"] = process.env.REACT_APP_API_KEY;
    axios.defaults.headers.common["x-rapidapi-key"] = "apiKey";
    axios.defaults.headers.common["apiKey"] =
      "bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2";
    const fetchData = async () => {
      const { data } = await axios.post(
        "https://smarty.kerzz.com:4004/api/mock/getFeed",

        {
          skip: 0,
          limit: 0,
          latitude: 0,
          longitude: 0,
        }
      );
      setRestaurants(data.response);
      console.log("clg", data.response);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("deneme", restaurants);
  }, [restaurants]);
  return (
    <Fragment>
      <SearcBox />
      <div className="container title mb-2 mt-1">Sonuçlar</div>
      {restaurants?.map((item, index) => (
        <Container className="card-style" key={index}>
          <Col xs="3" className="point">
            <Row>
              <Col>
                <img src={Star} width={8} />
              </Col>
              <Col>{item?.storeInfo?.rate}</Col>
            </Row>
          </Col>
          <div className="image-style">
            <img src={item?.images[0]?.base64} width="100%" />
          </div>

          <div className="card-title mb-2 mt-2">{item?.title}</div>
          <Row>
            <Col xs="6" className="detail-text ">
              Muhallebi, ekler
            </Col>
            <Col xs="6">
              <Row className="ml-3">
                <Col xs="1" className="shopping-icon p-0">
                  <img src={Basket} width="15" />
                </Col>
                <Col xs="11">
                  <div className="price-text">Sipariş Tutarı : 30tl</div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="distance-text">3 km yakınında</Col>
            <Col>
              <Row>
                <Col className="open-text">{item?.storeInfo?.status}</Col>
                <Col className="opentime-text">
                  {item?.storeInfo?.workingHours[0]?.open} -{" "}
                  {item?.storeInfo?.workingHours[0]?.close}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ))}
    </Fragment>
  );
};

export default MainPage;
