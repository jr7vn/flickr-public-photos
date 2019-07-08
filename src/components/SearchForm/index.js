import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      value
    });

    this.props.onSearch(value);
  }

  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="search">
            <i className="mdi mdi-magnify" />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="search"
          aria-label="search"
          aria-describedby="search"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchForm;
