import React from 'react';
import './Header.scss';

const Header = props => (
    <header className="header">
  <div className="page-flows">
  
    <span className="flow">
      <i className="fas fa-angle-left"></i>
    </span>
    
    <span className="flow">
      <i className="fas fa-angle-right"></i>
    </span>
    
  </div>
  
  <div className="search">
  
    <input type="text" placeholder="Search" />
    
  </div>
    </header>
);


export default Header;