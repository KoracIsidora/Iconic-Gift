import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "react-uuid";
import { getItems, addItems } from "./service/Service";

const GiftList = () => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    getItems().then((data) => setStatus(data));
  }, []);

  // function handleAdd(title, description, picture, category) {
  //   addItems({ title, description, picture, category }).then((data) => {
  //     console.log(data);
  //   });
  // }

  useEffect(() => {
    function handleSearch() {
      getItems().then((data) => setStatus(data));
      status.map(({ category }) => {
        console.log(category);
      });
    }
  });

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
          >
            <option>Za njega</option>
            <option>Za nju</option>
            <option>Hrana</option>
            <option>Novogosinji</option>
            <option>Za bebu</option>
          </select>
          <Button
            color="dark"
            className="container"
            // onClick={() => {
            //   status.map(({ category }) => (
            //     <CSSTransition key={uuid()} timeout={500} classNames="fade">
            //       <ListGroupItem>{category}</ListGroupItem>
            //     </CSSTransition>
            //   ));
            // }}
          >
            Pretrazi
          </Button>
        </div>
      </div>
      <ListGroup>
        <TransitionGroup className="giftlist">
          {status
            .map(({ title, description }) => (
              <CSSTransition key={uuid()} timeout={500} classNames="fade">
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
