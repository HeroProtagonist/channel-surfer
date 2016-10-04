import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import handleSearch from '../redux/actions/searchActions';

const Search = props => {
  let input;

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        ref={c => (input = c)}
      />
      <button
        className="btn btn-default"
        onClick={() => {
          props.handleSearch(input.value);
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
    handleSearch: bindActionCreators(handleSearch, dispatch),
  };
}

Search.propTypes = {
  handleSearch: React.PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Search);
