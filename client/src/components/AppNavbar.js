import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Logo from "../assets/Logo.png";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div className="container">
        <Navbar
          dark
          expand="sm"
          className="mb-0"
          style={{ backgroundColor: "#C9B3EC" }}
        >
          <Container>
          
            <NavbarBrand href="/" style={{ fontSize: "2.5rem" }}>
            <img src={Logo} width="60" height="60" className="d-inline-block align-center" alt=""/>
              Iconic Gift
            </NavbarBrand>
            <NavbarToggler onClick={handleToggle} />
            <Collapse isOpen={isOpen} navbar style={{ float: "none" }}>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    href="/login"
                    style={{ float: "left", fontSize: "1.5rem" }}
                  >
                    Login
                  </NavLink>

                  <NavLink href="/register" style={{ float: "right", fontSize: "1.5rem" }}>
                    Register
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    </Router>
  );
};
export default AppNavbar;
