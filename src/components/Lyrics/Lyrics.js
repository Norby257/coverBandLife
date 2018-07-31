import React, {Component} from "react";
import './Lyrics.scss';

class Lyrics extends Component {
    render() {
        return (
            <div className="content__right">
                LYRICS ARE HERE 

                <div className="track"> Track Name </div>
                <div> Artist </div>
                <div> Key </div>
                <div> Chords</div>
            </div>
        )
    }
}

export default Lyrics;