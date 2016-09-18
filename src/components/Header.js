import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './Header.css';

class New extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React Store</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="#">Link</NavItem>
            <NavItem href="#">Link</NavItem>
            <NavDropdown title="Dropdown" id="xunda">
              <MenuItem>Action</MenuItem>
              <MenuItem divider/>
              <MenuItem>Action</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default New;
