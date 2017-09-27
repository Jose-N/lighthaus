import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavBar = props => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">LightHaus</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <li role="presentation"><a href="/youtube">Youtube</a></li>
          <li role="presentation"><a href="/twitch">Twitch</a></li>
          <li role="presentation"><a href="/twitter">Twitter</a></li>
        </Nav>
        <Nav pullRight>
          <li role="presentation"><a href="/users/sign_in">Login</a></li>
          <li role="presentation"><a href="/users/sign_up">Register</a></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}; 

export default NavBar;
