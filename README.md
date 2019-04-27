# react-cplayer

> 

[![NPM](https://img.shields.io/npm/v/react-cplayer.svg)](https://www.npmjs.com/package/react-cplayer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Description
A simple React wrapper for [cplayer](http://cplayer.js.org/)

## Install
```bash
npm install --save react-cplayer
```
or
```bash
yarn add --save react-cplayer
```

## Usage

```jsx
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
          big={true}
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

```

## License

MIT © [Fallenhh](https://github.com/Fallenhh)
