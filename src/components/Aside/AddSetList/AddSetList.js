import React, { Component } from "react"

class AddSetList extends Component {
  render() {
    return (
      <div className="playlist">
        <a href="#">
          <i className="fa fa-plus-square" aria-hidden="true"></i>
            Add a track
        </a>
      </div>
    )
  }
}

export default AddSetList;
