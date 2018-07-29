import React from 'react';
import './Nav.css';

//  Nav component 

const Nav = props => (
    <nav className="navbar">
    <ul className="twitter" role="navigation">
    <li><i className="fa fa-home"></i>Home</li>
    <li><i className="fa fa-bell-o"></i>Notifications</li>
    <li><i className="fa fa-envelope-o"></i>Messages</li>
    <li className="twitter__bird"><i className="fa fa-twitter"></i></li>
    <li><form><input placeholder="search twitter"/><i className="fa fa-search"></i></form></li>
    <li><i className="fa fa-user-circle-o"></i></li>
    <li><button>tweet</button></li>
  </ul>

    </nav>
)

export default Nav;