import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar";
import SearchBarOptions from "../components/SearchBarOptions";
import Dropdown from "react-bootstrap/Dropdown";
import { searchMovies, getMovieCast } from "../services";
import { formatMovies, getCast } from "../utils";

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
      .then((data) => this.setState({ options: data }))
      .catch((error) => {
        this.setState({ options: [] });
      });
  };

  handleClick = (e, id) => {
    this.props
      .getMovieCast(id)
      .then((data) => getCast(data.cast))
      .then((cast) => {
        const movieTitle = e.target.text;
        this.props.onMovieSelection(cast, movieTitle);
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <Dropdown>
        <SearchBar onChange={this.handleChange} />
        <SearchBarOptions
          movies={this.state.options}
          onClick={this.handleClick}
        />
      </Dropdown>
    );
  }
}

PickMoviePage.propTypes = {
  searchMovies: PropTypes.func,
  getMovieCast: PropTypes.func,
  onMovieSelection: PropTypes.func,
};

PickMoviePage.defaultProps = {
  searchMovies: searchMovies,
  getMovieCast: getMovieCast,
  onMovieSelection: () => {},
};

export default PickMoviePage;
