import React, { Component } from "react";
import GamePage from "./pages/GamePage";
import ResultsPage from "./pages/ResultsPage";
import PickMoviePage from "./pages/PickMoviePage";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSelectionPage: true,
      showGamePage: false,
      showResults: false,
      movieId: 0,
      results: [],
    };
  }

  handleMovieSelection = (cast, movieTitle) => {
    this.setState({
      movieTitle: movieTitle,
      cast: cast,
      showSelectionPage: false,
      showGamePage: true,
      showResults: false,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.showSelectionPage && (
          <PickMoviePage onMovieSelection={this.handleMovieSelection} />
        )}
        {this.state.showGamePage && <GamePage />}
        {this.state.showResults && <ResultsPage />}
      </div>
    );
  }
}

export default App;
