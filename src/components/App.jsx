import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Search from './Search.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoList from './VideoList.jsx';

class App extends React.Component {

  // componentDidMount() {
  //   http://vimeo.com/api/v2/channel/staffpicks/videos
  //   console.log(id)
  //   axios.post('https://api.vimeo.com/oauth/authorize/client', {
  //     grant_type: 'client_credentials',
  //     headers: {
  //       Authorization: `Basic ${id}`,
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   });
  // }

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
  click: state.click,
});

// function mapDispatchToProps(dispatch) {
//   return {
//     handleClick: bindActionCreators(handleClick, dispatch),
//   };
// }

App.propTypes = {
  click: React.PropTypes.bool,
  handleClick: React.PropTypes.func,
};

export default connect(mapStateToProps)(App);
