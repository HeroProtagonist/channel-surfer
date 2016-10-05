import React from 'react';
import { connect } from 'react-redux';
require('../styles/styles.css');

const VideoPlayer = props =>
  Object.keys(props.mainVideo).length === 0 ? <div className="loading">Loading...</div> : (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        id="player1"
        src={`https://player.vimeo.com/video/${props.mainVideo.uri ? props.mainVideo.uri.split('/')[2] : ''}`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )

VideoPlayer.propTypes = {

};

// VideoList.propTypes = {
//   videoList: React.PropTypes.array,
// };

const mapStateToProps = (state) => ({
  mainVideo: state.mainVideo,
});

export default connect(mapStateToProps)(VideoPlayer);
