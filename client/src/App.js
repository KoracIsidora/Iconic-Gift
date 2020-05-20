import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import Content from "./components/content/Content";

function App() {

  const [user, setUser] = useState();

  return (
    <div className="App">
      <AppNavbar setUser={setUser} logedIn={user}></AppNavbar>
      <Content setUser={setUser} user={user} logedIn={user}></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
