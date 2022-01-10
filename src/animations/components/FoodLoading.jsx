import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import checkAnimation from "../src/foodLoading.json"

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
        loop={true}
        controls={true}
        src={checkAnimation}
        style={{ height: '230px', width: '270px' }}
      ></Player>
    );
  }
}

export default CheckAnimation;