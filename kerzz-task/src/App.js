import Layout from "./Layout/Layout";
import MainPage from "./Pages/MainPage";
import Container from "react-bootstrap/esm/Container";
import React,{ useEffect } from "react";
import axios from "axios";


function App() {
  // useEffect(() => {
  // //  axios.defaults.headers.common['apiKey'] = process.env.REACT_APP_API_KEY;
  // axios.defaults.headers.common['x-rapidapi-key']="apiKey";
  //   //  axios.defaults.headers.common['apiKey'] ="bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2";
     
  // });
  return (
    <Container>
      <Layout/>
      <MainPage/>
    </Container>
  );
}

export default App;
