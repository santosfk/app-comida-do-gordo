import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import checkAnimation from "../src/check.json"

class CheckAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref
  }
  render() {
    return (
      <Player
        ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={false}
        controls={true}
        keepLastFrame={true}
        src={checkAnimation}
        style={{ height: '230px', width: '270px' }}
      ></Player>
    );
  }
}

export default CheckAnimation;