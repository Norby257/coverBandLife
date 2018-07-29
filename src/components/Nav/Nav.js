import React from 'react';
import './Nav.scss';

//  Nav component 

const Nav = props => (
    <nav className="navigation">
        <div className="navigation__list">

          <div className="navigation__list__header" 
               role="button" 
               data-toggle="collapse" 
               href="#main" 
               aria-expanded="true" 
               aria-controls="main">
            Main
          </div>
          
          <div className="collapse in" id="main">
          
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-browsers"></i>
              <span>Browse</span>
            </a>

            <a href="#" className="navigation__list__item">
              <i className="ion-person-stalker"></i>
              <span>Activity</span>
            </a>

            <a href="#" className="navigation__list__item">
              <i className="ion-radio-waves"></i>
              <span>Radio</span>
            </a>
            
          </div>

        </div>

    </nav>
)

export default Nav;