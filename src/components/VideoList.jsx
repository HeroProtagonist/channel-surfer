import React from 'react';
import { connect } from 'react-redux';
import Video from './Video.jsx';

const VideoList = props => (
  <div className="list-container">
    <ul className="list-group">
      {props.videoList.map((video, index) => (
        <Video
          key={index}
          index={index}
          video={video}
        />
      ))}
    </ul>
  </div>
);

VideoList.propTypes = {
  videoList: React.PropTypes.array,
};

const mapStateToProps = (state) => ({
  videoList: state.videoList,
});

export default connect(mapStateToProps)(VideoList);
