import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import '../styles/Navbar.css'
function MyNavBar(){

  return (
    <div>
       <Navbar className="navbar" navbar>
          <Nav>
              <NavItem>
              <NavLink href="/" id="nav-link">Home</NavLink>
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