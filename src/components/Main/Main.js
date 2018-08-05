import React, {Component} from 'react';
import './Main.scss';
class Main extends Component {


  //  state 

  state = {
    setList: [],
    gigDate: "",
    gigLocation: "",
    gigNotes: ""
  }


  //   lifecycle methods here 

  componentDidMount();


    //  event functions here that are passed as props to main area - will use setState 
  //  add track 
  //  remove track 
  //  Opener
  //  Closer 

addTrack = () => {
  console.log('new track added! Rock on');
}  

removeTrack = () => {
  console.log('track has been removed');
}

SetOpener = () => {
  console.log('this is your opening song!')
}

setCloser = () => { 
  console.log('this is your closing song');
}

//  also have array of JSON for now to map over and access as props rather than manually
//  doing this 


    render() {
        return (
            
            <div role="tabpanel" class="tab-pane active" id="artist-overview">
            
            <div className="overview">
            
              <div className="overview__artist">
            
               
                <div className="section-title">Queens of Rock: Foo Fighters </div>

                <div className="latest-release">


                </div>
              
                <div className="section-title">Track List</div>

                <div className="tracks">

                  <div className="track">

                    <div className="track__art">


                    </div>

                    <div className="track__number">1</div>

                    <div className="track__added">

                      <i className="ion-checkmark-round added"></i>

                    </div>

                    <div className="track__title">Hero</div>

                  

                    <div className="track__plays">The Colour and the Shape</div>

                  </div>

                  <div className="track">

                    <div className="track__art">

                      

                    </div>

                    <div className="track__number">2</div>

                    <div className="track__added">

                      <i className="ion-plus not-added"></i>

                    </div>

                    <div className="track__title">Everlong</div>

                  

                    <div className="track__plays">The Colour and the Shape</div>

                  </div>

                  <div className="track">

                    <div className="track__art">

                      

                    </div>

                    <div className="track__number">3</div>

                    <div className="track__added">

                      <i className="ion-checkmark-round added"></i>

                    </div>

                    <div className="track__title">Walk</div>

                   

                    <div className="track__plays">Wasting Light</div>

                  </div>

                  <div className="track">

                    <div className="track__art">

                      

                    </div>

                    <div className="track__number">4</div>

                    <div className="track__added">

                      <i className="ion-plus not-added"></i>

                    </div>

                    <div className="track__title">Learn to Fly</div>

                   

                    <div className="track__plays"> There Is Nothing Left to Lose</div>

                  </div>

                  <div className="track">

                    <div className="track__art">

                      

                    </div>

                    <div className="track__number">5</div>

                    <div className="track__added">

                      <i className="ion-checkmark-round added"></i>

                    </div>

                    <div className="track__title">Best of You</div>

                

                    <div className="track__plays">In Your Honor </div>

                  </div>

                </div>
                    </div> 
                    </div>
                    </div>
        )
    }
}

export default Main;