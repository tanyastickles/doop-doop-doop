import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CheckBox from "../components/CheckBox";

const ERROR_MESSAGE =
  "Something has gone wrong.  Try refreshing the page and picking another movie.";

export const ErrorGamePage = () => (
  <Card>
    <Card.Header>{ERROR_MESSAGE}</Card.Header>
  </Card>
);

const shouldRenderErrorPage = (actors) => !!actors.length < 1;

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: {},
    };
  }

  onClick = (actor, isSelected) => {
    const update = this.state.selections;
    update[actor] = isSelected;
    this.setState({ selections: update });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const answers = Object.keys(this.state.selections).filter(
      (selection) => !!this.state.selections[selection]
    );
    // TODO: error handling -- probably a toast
    if (answers.length == this.props.numberOfCorrectAnswers) {
        this.props.onSubmit(answers);
    }
    
  };

  render() {
    return shouldRenderErrorPage(this.props.actors) ? (
      <ErrorGamePage />
    ) : (
      <Card>
        <Card.Header>
          Which {this.props.numberOfCorrectAnswers} actors were in{" "}
          <i>
            <b>{this.props.movieTitle}</b>
          </i>
          ?
        </Card.Header>
        <Card.Body>
          <Form onSubmit={this.onSubmit}>
            {this.props.actors.map((actor) => (
              <CheckBox key={actor} actor={actor} onClick={this.onClick} />
            ))}
            <Button type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

GamePage.propTypes = {
  numberOfCorrectAnswers: PropTypes.number,
  movieTitle: PropTypes.string,
  actors: PropTypes.array,
  onSubmit: PropTypes.func,
};

GamePage.defaultProps = {
  numberOfCorrectAnswers: 3,
  movieTitle: "the same movie",
  actors: [],
  onSubmit: () => {},
};

export default GamePage;
