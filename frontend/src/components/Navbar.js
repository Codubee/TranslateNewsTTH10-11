import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import LandingPage from '../views/LandingPage';
import News from '../views/News';

function MyNavBar(){

  return (
    <div>
       <Navbar className="color-nav" navbar>
          <Nav>
              <NavItem>
              <NavLink classname="nav-link" href="../views/LandingPage">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="../views/News" classname="nav-link">News</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default MyNavBar;