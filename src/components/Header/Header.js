import React from 'react';
import './Header.scss';

const Header = props => (
    <header className="header">
  <div className="page-flows">
  
    <span className="flow">
      <i className="ion-chevron-left"></i>
    </span>
    
    <span className="flow">
      <i className="ion-chevron-right disabled"></i>
    </span>
    
  </div>
  
  <div className="search">
  
    <input type="text" placeholder="Search" />
    
  </div>
  
  <div className="user">
  
    <div className="user__notifications">
    
      <i className="ion-android-notifications"></i>
      
    </div>
    
    <div className="user__inbox">
    
      <i className="ion-archive"></i>
      
    </div>
    
    <div className="user__info">  
      <span className="user__info__name">
        
      </span>
      
    </div>
    
    <div className="user__actions">
    
      <div className="dropdown">
        <button className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <i className="ion-chevron-down"></i>
        </button>
        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
          <li><a href="#">Private Session</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Log Out</a></li>
        </ul>
      </div>
      
    </div>
    
  </div>
    </header>
);


export default Header;