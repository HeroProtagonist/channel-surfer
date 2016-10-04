import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import handleClick from '../redux/actions/clickActions';
import VideoPlayer from './VideoPlayer.jsx';

class App extends React.Component {

  componentDidMount() {

    // const id = btoa(`${process.env.CLIENT_ID} : ${process.env.CLIENT_SECRET}`);
    // console.log(id)
    // axios.post('https://api.vimeo.com/oauth/authorize/client', {
    //   grant_type: 'client_credentials',
    //   headers: {
    //     Authorization: `Basic ${id}`,
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    // });
  }

  render() {
    return (
      <div onClick={() => this.props.handleClick(!this.props.click)}>
        Channel Surfer!
        <div className="container-fluid">

            <div className="row-fluid">
                <div className="col-md-7">

                  <VideoPlayer />

                </div>
                <div className="col-md-5">

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

function mapDispatchToProps(dispatch) {
  return {
    handleClick: bindActionCreators(handleClick, dispatch),
  };
}

App.propTypes = {
  click: React.PropTypes.bool,
  handleClick: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
