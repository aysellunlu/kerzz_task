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
    };

    fetchData();
  }, []);

  useEffect(() => {
  }, [restaurants]);
  return (
    <Fragment>
      <SearcBox />
      <div className="container title mb-2 mt-1">Sonuçlar</div>
      {restaurants?.map((item, index) => (
        <Container className="card-style mb-4 pb-2" key={index}>
          <Col className="point">
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

          <div className="card-title mb-2 mt-3">{item?.title}</div>
          <Row>
            <Col xs="4" className="detail-text ">
              {item?.type}
            </Col>
            <Col xs="8">
              <Row className="ml-3">
                <Col xs="2">
                  <div className="shopping-icon">
                    <img src={Basket} width="15" />
                  </div>
                </Col>
                <Col xs="10">
                  <div className="price-text">
                    Min Sipariş Tutarı : {item?.storeInfo?.minOrderPrice}₺
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs="4" className="distance-text">
              3 km yakınında
            </Col>
            <Col xs="8">
              <Row>
                <Col xs="2">
                  {(item?.storeInfo?.status === "open" && (
                    <div className="open-text"> Açık</div>
                  )) ||
                    (item?.storeInfo?.status === "close" && (
                      <div className="close-text"> Kapalı</div>
                    ))}
                </Col>
                <Col xs="10" className="opentime-text">
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
