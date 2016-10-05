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

function mapDispatchToProps(dispatch) {
  return {
    handleSearchClick: bindActionCreators(handleSearchClick, dispatch),
  };
}

Search.propTypes = {
  handleSearch: React.PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Search);
