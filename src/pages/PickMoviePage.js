import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar";
import SearchBarOptions from "../components/SearchBarOptions";
import Dropdown from "react-bootstrap/Dropdown";
import { searchMovies } from "../services";
import { formatMovies } from "../utils";

class PickMoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    if (!value) {
      this.setState({ options: [] });
    }

    this.props
      .searchMovies(value)
      .then((data) => formatMovies(data))
      .then((data) => 
        this.setState({ options: data }))
      .catch((error) => {
        this.setState({ options: [] });
      });
  };

  handleMovieSelection = (id) => {};

  render() {
    return (
      <Dropdown>
        <SearchBar onChange={this.handleChange} />
        <SearchBarOptions movies={this.state.options} />
      </Dropdown>
    );
  }
}

PickMoviePage.propTypes = {
  searchMovies: PropTypes.func,
};

PickMoviePage.defaultProps = {
  searchMovies: searchMovies,
};

export default PickMoviePage;
