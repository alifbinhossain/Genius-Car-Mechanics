import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";
import { NavHashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  const history = useHistory();
  const signOut = () => {
    logOut()
      .then((reault) => {
        history.push("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Car Solution</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavHashLink className="nav-link" to="/home#top">
              Home
            </NavHashLink>
            <NavHashLink className="nav-link" smooth to="/home/#services">
              Services
            </NavHashLink>
            <NavHashLink className="nav-link" smooth to="/home#experts">
              Experts
            </NavHashLink>
            {user ? (
              <>
                <Navbar.Text className="me-5">
                  Signed in as: {user.displayName}
                </Navbar.Text>
                <button className="btn btn-dark btn-sm " onClick={signOut}>
                  Sign Out
                </button>
              </>
            ) : (
              <NavHashLink className="nav-link" to="/form/login">
                Log In
              </NavHashLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
