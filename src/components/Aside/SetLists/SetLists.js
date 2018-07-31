import React, { Component } from "react"
import './SetLists.scss';
class SetList extends Component {
  render() {
    return (
      //  this would be array.map() but just doing this for UI first 
      <div className="navigation__list">
       

        <div className="collapse in" id="playlists">
          <a href="#" className="navigation__list__item">
           
            <span>Rock and Grohl</span>
          </a>

          <a href="#" className="navigation__list__item">
           
            <span>80's Rock </span>
          </a>

          <a href="#" className="navigation__list__item">
           
            <span>Punk Princess Party </span>
          </a>

          <a href="#" className="navigation__list__item">
           
            <span>60's Tunes</span>
          </a>

          <a href="#" className="navigation__list__item">
           
            <span>Arctic Monkeys</span>
          </a>

          <a href="#" className="navigation__list__item">
           
            <span>Acoustic Aviici</span>
          </a>

          <a href="#" className="navigation__list__item">
           
            <span>Summer jams</span>
          </a>

          <a href="#" className="navigation__list__item">
           
            <span>Funk</span>
          </a>

          <a href="#" className="navigation__list__item">
           
            <span>Country</span>
          </a>

          <a href="#" className="navigation__list__item">
           
            <span>Grunge</span>
          </a>

          <a href="#" className="navigation__list__item">
           
            <span>Lady Gaga</span>
          </a>

          <a href="#" className="navigation__list__item">
           
            <span>Closers</span>
          </a>
        </div>
      </div>
    )
  }
}

export default SetList
