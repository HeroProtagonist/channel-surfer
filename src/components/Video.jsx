import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleListClick, removeMainVideo } from '../redux/actions/videoActions';
import { appendVideoList } from '../redux/actions/searchActions';

const Video = props => (
  <li
    onClick={() => {
      props.appendVideoList(props.mainVideo);
      props.handleListClick(props.video);
      props.removeMainVideo(props.index);
    }}
    className="clearfix"
      >
    <h4 className="title list-group-item-heading">{props.video.name}</h4>
    <div>
      <img
        src={`https://i.vimeocdn.com/video/${props.video.uri.split('/')[2]}_100x75.jpg?r=pad`}
        className="thumbnail"
      />
    </div>
    <p className="from pull-xs-left list-group-item-text">
      From:
      <a
        href={(props.video.user.link)} 
        onClick={e => e.stopPropagation()}
        target="_blank"> {props.video.user.name}
      </a>
    </p>
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
