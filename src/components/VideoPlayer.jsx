import React from 'react';
import { connect } from 'react-redux';

const VideoPlayer = props => (
  <div className="embed-responsive embed-responsive-16by9">
    <iframe
      className="embed-responsive-item"
      id="player1"
      src={`https://player.vimeo.com/video/${props.mainVideo.uri ? props.mainVideo.uri.split('/')[2] : ''}`}
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

VideoPlayer.propTypes = {

};

// VideoList.propTypes = {
//   videoList: React.PropTypes.array,
// };

const mapStateToProps = (state) => ({
  mainVideo: state.mainVideo,
});

export default connect(mapStateToProps)(VideoPlayer);
