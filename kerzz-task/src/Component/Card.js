// import React, { useEffect, useState } from "react";
// import Container from "react-bootstrap/esm/Container";
// import CardImage from "../Images/visneli-sarmal.png";
// import "../Styles/Card.css";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Basket from "../Images/shopping_basket.svg";
// import Star from "../Images/star.svg";
// import axios from "axios";

// const Card = () => {
//   const [dataKerzz, setDataKerzz] = useState("");

//   useEffect(() => {
//     // axios.defaults.headers.common["apiKey"] = process.env.REACT_APP_API_KEY;
//      axios.defaults.headers.common["x-rapidapi-key"] = "apiKey";
//     axios.defaults.headers.common["apiKey"] =
//       "bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2";
//     const fetchData = async () => {
//       const response = await axios.post(
//         "https://smarty.kerzz.com:4004/api/mock/getFeed",

//         {
//           skip: 0,
//           limit: 0,
//           latitude: 0,
//           longitude: 0,
//         }
//       );

//       console.log(response.data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <Container className="card-style">
//       <Col xs="3" className="point">
//         <Row>
//           <Col>
//             <img src={Star} width={8} />
//           </Col>
//           <Col>4.2</Col>
//         </Row>
//       </Col>
//       {/* <div className="point row col-xs-2">
//         <div className="col">
            
//         </div>
//         <div className="col">
//             4.2
//         </div>
//       </div> */}
//       <div className="image-style">
//         <img src={CardImage} width="100%" />
//       </div>

//       <div className="card-title mb-2 mt-2">Reyhan Pastanesi Uzun Ad Demo</div>
//       <Row>
//         <Col xs="4" className="detail-text ">
//           Muhallebi, ekler
//         </Col>
//         <Col>
//           <Row className="p-0">
//             <Col xs="1" className="shopping-icon p-0">
//               <img src={Basket} width="15" />
//             </Col>
//             <Col xs="11">
//               <div className="price-text">Sipariş Tutarı : 30tl</div>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//       <Row>
//         <Col className="distance-text">3 km yakınında</Col>
//         <Col>
//           <Row>
//             <Col className="open-text">İşletme Açık</Col>
//             <Col className="opentime-text">10:00/22:00</Col>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Card;
