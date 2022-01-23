import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


import animationData from "../src/truck.json"

class TruckAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref
  }
  render() {
    return (
      <Player
        ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={true}
        playerState={"paused"}
        controls={true}
        keepLastFrame={true}
        src={animationData}
        style={{ height: '330px', width: '370px', }}
      ></Player>
    );
  }
}

export default TruckAnimation;