import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cplayer from 'cplayer'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {
    onInit() { },
    playlist: [
      {
        src: 'https://music.163.com/song/media/outer/url?id=500684228.mp3',
        poster: 'http://p2.music.126.net/noJPpaixwhM7vS7Mfhs9sg==/109951163008620133.jpg',
        name: 'Discovery',
        artist: 'Electro-Light',
        lyric: '',
        sublyric: '',
        album: 'Discovery'
      },
    ],
    dark: false,
    big: false,
  }

  componentDidMount() {
    const { onInit, ...restProps } = this.props;
    const control = new cplayer({
      ...restProps,
      element: this.container
    });
    this.control = control;
    onInit(control);
  }

  render() {
    return <div ref={el => (this.container = el)} />;
  }
}
