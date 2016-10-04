import React from 'react';

const VideoPlayer = props => (
  <div className="embed-responsive embed-responsive-16by9">
    <iframe
      className="embed-responsive-item"
      id="player1"
      src="https://player.vimeo.com/video/76979871"
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

VideoPlayer.propTypes = {

};

export default VideoPlayer;

