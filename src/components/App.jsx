import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from './Search.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoList from './VideoList.jsx';
import Header from './Header.jsx';
import VideoDescription from './VideoDescription.jsx';
import { handleSearchClick } from '../redux/actions/searchActions';
import { handleListClick, removeMainVideo } from '../redux/actions/videoActions';

require('../styles/styles.css');

class App extends React.Component {

  componentDidMount() {
    this.props.handleSearchClick('staff picks')
    

    setTimeout( () => {
      this.props.handleListClick(this.props.videoList[0]);
      this.props.removeMainVideo(0);
    }, 5000)

      
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="col-xs-8">
              <VideoPlayer />
              <VideoDescription />
            </div>
            <div className="col-xs-4">
              <Search />
              <VideoList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  videoList: state.videoList,
});

function mapDispatchToProps(dispatch) {
  return {
    handleSearchClick: bindActionCreators(handleSearchClick, dispatch),
    handleListClick: bindActionCreators(handleListClick, dispatch),
    removeMainVideo: bindActionCreators(removeMainVideo, dispatch),
  };
}

App.propTypes = {
  click: React.PropTypes.bool,
  handleClick: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
