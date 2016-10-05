import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSearchClick } from '../redux/actions/searchActions';

const Search = props => {
  let input;

  return (
    <div id="search">
      <input
        type="text"
        placeholder="Search..."
        ref={c => (input = c)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.handleSearchClick(input.value);
            input.value = '';
          }
        }}
      />
      <button
        className="btn btn-default"
        onClick={() => {
          props.handleSearchClick(input.value);
          input.value = '';
        }}
      >
      Submit
      </button>
    </div>
  );
};

Search.propTypes = {
  handleSearchClick: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    handleSearchClick: bindActionCreators(handleSearchClick, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Search);
