import React, { Component } from "react"
import './SetList.scss';
class SetList extends Component {
  render() {
    return (
      <div className="navigation__list">
        <div
          className="navigation__list__header"
          role="button"
          data-toggle="collapse"
          href="#playlists"
          aria-expanded="true"
          aria-controls="playlists"
        >
          Playlists
        </div>

        <div className="collapse in" id="playlists">
          <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes" />
            <span>Rock and Grohl</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes" />
            <span>80's Rock </span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes" />
            <span>Punk Princess Party </span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes" />
            <span>60's Tunes</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes" />
            <span>Arctic Monkeys</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes" />
            <span>Acoustic Aviici</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes" />
            <span>Summer jams</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes" />
            <span>Funk</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes" />
            <span>Country</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes" />
            <span>Grunge</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes" />
            <span>Lady Gaga</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes" />
            <span>Closers</span>
          </a>
        </div>
      </div>
    )
  }
}

export default SetList
