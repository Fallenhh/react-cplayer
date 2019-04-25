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
    width: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.string,
    showPlaylistButton: PropTypes.bool,
    dropDownMenuMode: PropTypes.oneOf(['bottom', 'top', 'none']),
    dark: PropTypes.bool,
    big: PropTypes.bool,
    onStarted: PropTypes.func,
    onEnded: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onPlaymodechange: PropTypes.func,
    onOpenaudio: PropTypes.func,
    onVolumechange: PropTypes.func,
    onTimeupdate: PropTypes.func,
  }

  static defaultProps = {
    onInit() { },
    playlist: [],
  }

  componentDidMount() {
    const { onInit, onStarted, onEnded, onPlay, onPause, onPlaymodechange, onOpenaudio, onVolumechange, onTimeupdate, ...restProps } = this.props;
    const control = new cplayer({
      ...restProps,
      element: this.container,
    });

    if (onStarted) {
      control.on('started', onStarted);
    }
    if (onEnded) {
      control.on('ended', onEnded);
    }
    if (onPlay) {
      control.on('play', onPlay);
    }
    if (onPause) {
      control.on('pause', onPause);
    }
    if (onPlaymodechange) {
      control.on('playmodechange', onPlaymodechange);
    }
    if (onOpenaudio) {
      control.on('openaudio', onOpenaudio);
    }
    if (onVolumechange) {
      control.on('volumechange', onVolumechange);
    }
    if (onTimeupdate) {
      control.on('timeupdate', onTimeupdate);
    }


    this.control = control;
    onInit(control);
  }

  render() {
    return <div ref={el => (this.container = el)} />;
  }
}
