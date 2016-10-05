import React from 'react';
import { connect } from 'react-redux';

const VideoDescription = (props) => 
  Object.keys(props.mainVideo).length === 0 ? null : (
  <div>
    <h3>{props.mainVideo.name}</h3>
      From:
      <a
        href={props.mainVideo.user.link} 
        onClick={e => e.stopPropagation()}
        target="_blank"> {props.mainVideo.user.name}
      </a>
    <p id="description">{props.mainVideo.description}</p>
  </div>
  )


// VideoList.propTypes = {
//   videoList: React.PropTypes.array,
// };

const mapStateToProps = (state) => ({
  mainVideo: state.mainVideo,
});

export default connect(mapStateToProps)(VideoDescription);
