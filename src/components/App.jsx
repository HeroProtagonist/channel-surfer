import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import handleClick from '../redux/actions/clickActions';

class App extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.handleClick(!this.props.click)}>
        Channel Surfer!
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
