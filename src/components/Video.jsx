import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleListClick, removeMainVideo } from '../redux/actions/videoActions';
import { appendVideoList } from '../redux/actions/searchActions';

const Video = props => (
  <li onClick={() => {
    props.appendVideoList(props.mainVideo);
    props.handleListClick(props.video);
    props.removeMainVideo(props.index);
    }}
  >
    {props.video.name}
      {props.video.pictures.uri
    }
  </li>
);

// VideoList.propTypes = {
//   videoList: React.PropTypes.array,
// };

const mapStateToProps = (state) => ({
  mainVideo: state.mainVideo,
});

function mapDispatchToProps(dispatch) {
  return {
    handleListClick: bindActionCreators(handleListClick, dispatch),
    appendVideoList: bindActionCreators(appendVideoList, dispatch),
    removeMainVideo: bindActionCreators(removeMainVideo, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Video);
