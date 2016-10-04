import React from 'react';
import { connect } from 'react-redux';

const Video = props => (
  <li>
    {props.video.name}
      {props.video.pictures.uri
    }
  </li>
);

// VideoList.propTypes = {
//   videoList: React.PropTypes.array,
// };

// const mapStateToProps = (state) => ({
//   videoList: state.videoList,
// });

export default connect()(Video);
