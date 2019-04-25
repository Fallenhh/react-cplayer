import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cplayer from 'cplayer'

export default class Cplayer extends Component {
  static propTypes = {
    onInit: PropTypes.func,
    playlist: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      poster: PropTypes.string,
      name: PropTypes.string,
      artist: PropTypes.string,
      lyric: PropTypes.string,
      sublyric: PropTypes.string,
      album: PropTypes.string,
    })),
    zoomOutKana: PropTypes.bool,
    playmode: PropTypes.oneOf(['listloop', 'singlecycle', 'listrandom']),
    volume: PropTypes.number,
    point: PropTypes.number,
    showPlaylist: PropTypes.bool,
    autoplay: PropTypes.bool,
    width: PropTypes.number,
    size: PropTypes.string,
    style: PropTypes.string,
    showPlaylistButton: PropTypes.bool,
    dropDownMenuMode: PropTypes.oneOf(['bottom', 'top', 'none']),
    dark: PropTypes.bool,
    big: PropTypes.bool,
    started: PropTypes.func,
    ended: PropTypes.func,
    play: PropTypes.func,
    pause: PropTypes.func,
    playmodechange: PropTypes.func,
    openaudio: PropTypes.func,
    volumechange: PropTypes.func,
    timeupdate: PropTypes.func,
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
    big: true,
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
