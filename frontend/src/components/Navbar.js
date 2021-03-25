import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function MyNavBar(){

  return (
    <div>
       <Navbar className="navbar" navbar>
          <Nav>
              <NavItem>
              <NavLink href="/Home" id="nav-link">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/News" id="nav-link">News</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default MyNavBar;