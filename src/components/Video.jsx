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
    <a href="#" className="title list-group-item-heading">{props.video.name}</a>
    <div>
      <img
        src={`https://i.vimeocdn.com/video/${props.video.uri.split('/')[2]}_100x75.jpg?r=pad`}
        alt="thumbnail"
        className="thumbnail"
      />
    </div>
    <p className="from pull-xs-left list-group-item-text">
      From:
      <a
        href={(props.video.user.link)}
        onClick={e => e.stopPropagation()}
        target="_blank"
      > {props.video.user.name}
      </a>
    </p>
  </li>
);

Video.propTypes = {
  video: React.PropTypes.object,
};

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
