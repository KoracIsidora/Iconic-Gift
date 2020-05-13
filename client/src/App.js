import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import Content from "./components/content/Content";
import GiftList from "./components/Gift";

function App() {
  return (
    <div className="App">
      <AppNavbar></AppNavbar>
      <Content></Content>
      <GiftList></GiftList>
      <Footer></Footer>
    </div>
  );
}

export default App;
