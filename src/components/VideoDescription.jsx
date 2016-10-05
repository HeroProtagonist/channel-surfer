import React from 'react';
import { connect } from 'react-redux';

const VideoDescription = (props) => (

  <div>
    <h3>{props.mainVideo.name}</h3>
    {props.mainVideo.description}
  </div>

)

// VideoList.propTypes = {
//   videoList: React.PropTypes.array,
// };

const mapStateToProps = (state) => ({
  mainVideo: state.mainVideo,
});

export default connect(mapStateToProps)(VideoDescription);
