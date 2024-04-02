import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Veer from "./care-hospital-logo.jpg";

function Navbarr({ loggedIn, onLogout }) {
  return (
    <Navbar collapseOnSelect expand="md" style={{ backgroundColor: "skyblue" }}>
      <Navbar.Brand href="#gopi">
        <img src={Veer} height={50} width={80} style={{ marginLeft: "80px" }} alt='h' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#c1">Doctors</Nav.Link>
          <Nav.Link href="#c2">Center of Excellence</Nav.Link>
          <NavDropdown title="Services" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#c1">Heart Care</NavDropdown.Item>
            <NavDropdown.Item href="#c4">24/7</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Emergency Services</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#c3">Branches</Nav.Link>
        </Nav>

        {loggedIn ? (
          <Link to="/logout"><Button onClick={onLogout} style={{ marginRight: "10px" }} variant="success">Doctor Logout</Button></Link>
        ) : (
          <Link to="/login"><Button   style={{ marginRight: "20px" }} variant="success">Doctor Login</Button></Link>
        )}
        
        <Link to="/appointment"><Button variant="success">Book Appointment</Button></Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarr;
