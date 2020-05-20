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

const AppNavbar = ({ logedIn, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  if (logedIn) {
    return (
      <Router>
        <div>
          <Navbar
            dark
            expand="md"
            className="mb-0"
            style={{ backgroundColor: "#C9B3EC" }}
          >
            <Container>
              <NavbarBrand href="/" style={{ fontSize: "2.5rem" }} onClick={()=>setUser()}>
                <img
                  src={Logo}
                  width="60"
                  height="60"
                  className="d-inline-block align-center"
                  alt=""
                />
                ICONIC GIFT
              </NavbarBrand>
              <NavbarToggler onClick={handleToggle} />
              <Collapse isOpen={isOpen} navbar style={{ float: "none" }}>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                  {/* <NavLink
                    href="/profile/:user_id"
                    style={{
                      float: "right",
                      fontSize: "1.5rem",
                      color: "white",
                    }}
                  >
                    Profil
                  </NavLink> */}
                    <NavLink
                      href="/"
                      style={{
                        float: "left",
                        fontSize: "1.5rem",
                        color: "white",
                      }}
                      onClick={()=>setUser()}
                    >
                      Logout
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div>
        <Navbar
          dark
          expand="md"
          className="mb-0"
          style={{ backgroundColor: "#C9B3EC" }}
        >
          <Container>
            <NavbarBrand href="/" style={{ fontSize: "2.5rem" }}>
              <img
                src={Logo}
                width="60"
                height="60"
                className="d-inline-block align-center"
                alt=""
              />
              ICONIC GIFT
            </NavbarBrand>
            <NavbarToggler onClick={handleToggle} />
            <Collapse isOpen={isOpen} navbar style={{ float: "none" }}>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    href="/login"
                    style={{
                      float: "left",
                      fontSize: "1.5rem",
                      color: "white",
                    }}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    href="/register"
                    style={{
                      float: "right",
                      fontSize: "1.5rem",
                      color: "white",
                    }}
                  >
                    Registracija
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
