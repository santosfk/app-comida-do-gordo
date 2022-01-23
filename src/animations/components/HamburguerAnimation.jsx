import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import * as animationData from '../src/hamburguer.json'

export default class HamburguerAnimation extends React.Component {

  constructor(props) {
    super(props);
    this.player = React.createRef();
  }

  render() {

    return (

      <Player
        ref={this.player}
        autoplay={true}
        loop={true}
        playerState={"paused"}
        controls={true}
        keepLastFrame={true}
        src={animationData}
        style={{ height: '470px', width: '470px' }}
      ></Player>
    )
  };


}
