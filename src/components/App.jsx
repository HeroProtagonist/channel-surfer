import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from './Search.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoList from './VideoList.jsx';
import { handleSearchClick } from '../redux/actions/searchActions';
import handleListClick from '../redux/actions/videoActions';

class App extends React.Component {

  componentDidMount() {
    this.props.handleSearchClick('staff picks')
    

    setTimeout( () => {
      this.props.handleListClick(this.props.videoList[0]);
    }, 5000)

      
  }

  render() {
    return (
      <div>
        Channel Surfer!
        <Search />
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="col-sm-8">
              <VideoPlayer />
            </div>
            <div className="col-sm-4">
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
  };
}

App.propTypes = {
  click: React.PropTypes.bool,
  handleClick: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
