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

  function handleAdd(title, description, picture) {
    addItems({ title, description, picture }).then((data) => {
      console.log(data);
    });
  }

  return (
    <Container>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={() => {
          const title = prompt("Enter item");
          const description = prompt("Enter description");
          const picture = prompt("Enter binary");
          if (title) {
            setStatus([...status, { title, description, picture }]);
          }
          handleAdd(title, description, picture);
        }}
      >
        Add Gift
      </Button>
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
