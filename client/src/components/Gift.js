import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "react-uuid";
import { getItems, addItems } from "./service/Service";

const GiftList = () => {
  const [status, setStatus] = useState([]);
  const [work, setWork] = useState("");

  useEffect(() => {
    getItems().then((data) => setStatus(data));
  }, []);

  // function handleAdd(title, description, picture, category) {
  //   addItems({ title, description, picture, category }).then((data) => {
  //     console.log(data);
  //   });
  // }

  function handleSearch() {
    status.forEach((cat) => {
      let x = document.getElementById("options").selectedIndex;
      let y = document.getElementById("options").options[x].text;
      if (cat.category === y) {
        setWork(cat.title);
      } else {
        console.log("ne");
      }
    });
  }

  return (
    <Container className="list">
      {/* <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={() => {
          const title = prompt("Enter item");
          const description = prompt("Enter description");
          const picture = prompt("Enter binary");
          const cat = prompt("Enter cat");
          if (title) {
            setStatus([...status, { title, description, picture, cat }]);
          }
          handleAdd(title, description, picture, cat);
        }}
      >
        Add Gift
      </Button> */}
      <div className="mb-5 container-fluid">
        <h3
          className="mt-5 mb-5"
          style={{ fontWeight: "bold", fontSize: "3.5rem" }}
        >
          Izaberi kategoriju:
        </h3>
        <div className="container">
          <select
            className="btn btn-dark mb-5 container"
            style={{ textAlign: "center" }}
            id="options"
          >
            <option>za njega</option>
            <option>Za nju</option>
            <option>Hrana</option>
            <option>Novogosinji</option>
            <option>Za bebu</option>
          </select>
          <Button
            color="dark"
            className="container"
            onClick={() => {
              handleSearch();
            }}
          >
            Pretrazi
          </Button>
        </div>
      </div>
      <ListGroup>
        <div>{work}</div>
        <TransitionGroup className="giftlist">
          {status
            .map(({ title, description }) => (
              <CSSTransition key={uuid()}>
                <ListGroupItem>
                  {title} {description}
                </ListGroupItem>
              </CSSTransition>
            ))
            .slice(0, 4)}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default GiftList;
