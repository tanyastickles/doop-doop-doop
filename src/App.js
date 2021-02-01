import React, { Component } from "react";
import { PropTypes } from "prop-types";
import GamePage from "./pages/GamePage";
import PickMoviePage from "./pages/PickMoviePage";
import "bootstrap/dist/css/bootstrap.min.css";

const DEFAULT_VALID_ACTORS = 3;
const DEFAULT_TOTAL_ACTORS = 5;

const getActorsForGame = (numberOfActors, actors) => {
  const results = [];
  while (results.length < numberOfActors) {
    const random = actors[Math.floor(Math.random() * actors.length)];

    if (!results.includes(random)) {
      results.push(random);
    }
  }
  return results;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSelectionPage: true,
      showGamePage: false,
      showResults: false,
      movieTitle: 0,
      cast: [],
      results: 0,
    };
  }

  getActorsNotInMovie = (cast) => {
    const actors = this.props.defaultActors;
    const ActorsNotInCast = actors.filter((actor) => !cast.includes(actor));

    const count = DEFAULT_TOTAL_ACTORS - DEFAULT_VALID_ACTORS;
    const results = getActorsForGame(count, ActorsNotInCast);
    return results;
  };

  handleMovieSelection = (cast, movieTitle) => {
    const castOptions = getActorsForGame(DEFAULT_VALID_ACTORS, cast);
    const actorsNotInMovie = this.getActorsNotInMovie(cast);
    const gameActors = castOptions.concat(actorsNotInMovie).sort();

    this.setState({
      movieTitle: movieTitle,
      cast: cast,
      actors: gameActors,
      showSelectionPage: false,
      showGamePage: true,
    });
  };

  handleSubmit = (selections) => {
    const cast = this.state.cast;
    let score = 0;
    // could use reduce but was lazy
    selections.forEach((answer) => {
      if (cast.includes(answer)) {
        score++;
      }
    });
    this.setState({
      showResults: true,
      results: score,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.showSelectionPage && (
          <PickMoviePage onMovieSelection={this.handleMovieSelection} />
        )}
        {this.state.showGamePage && (
          <GamePage
            movieTitle={this.state.movieTitle}
            onSubmit={this.handleSubmit}
            actors={this.state.actors}
          />
        )}
        {this.state.showResults && (
          <p> you got {this.state.results} answers correct!! </p>
        )}
      </div>
    );
  }
}

App.propTypes = {
  defaultActors: PropTypes.array,
};

App.defaultProps = {
  defaultActors: [],
};
export default App;
