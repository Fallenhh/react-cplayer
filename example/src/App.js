import React, { Component } from 'react'
import Cplayer from 'react-cplayer'

export default class App extends Component {
  onInit = control => {
    this.control = control;
  }

  onPlay = () => {
    console.log('onPlay');
  }

  render() {
    return (
      <div>
        <Cplayer
          big={false}
          onInit={this.onInit}
          onPlay={this.onPlay}
          playlist={[
            {
              src: 'https://music.163.com/song/media/outer/url?id=500684228.mp3',
              poster: 'http://p2.music.126.net/noJPpaixwhM7vS7Mfhs9sg==/109951163008620133.jpg',
              name: 'Discovery',
              artist: 'Electro-Light',
              lyric: '',
              sublyric: '',
              album: 'Discovery'
            },
          ]}
        />
        <button onClick={() => { this.control.pause() }}> Pause </button>
      </div>
    )
  }
}
