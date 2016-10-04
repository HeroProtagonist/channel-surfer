import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import handleListClick from '../redux/actions/videoActions';

const Video = props => (
  <li onClick={() => props.handleListClick(props.video)}>
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

function mapDispatchToProps(dispatch) {
  return {
    handleListClick: bindActionCreators(handleListClick, dispatch),
  };
}


export default connect(null, mapDispatchToProps)(Video);
