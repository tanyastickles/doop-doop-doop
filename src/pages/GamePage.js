import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const ERROR_MESSAGE =
  "Something has gone wrong.  Try refreshing the page and picking another movie.";

export const ErrorGamePage = () => (
  <Card>
    <Card.Header>{ERROR_MESSAGE}</Card.Header>
  </Card>
);

const shouldRenderErrorPage = (actors) => !!actors.length < 1;

const GamePage = ({ correctAnswers, movieTitle, actors, onSubmit }) => {
  return shouldRenderErrorPage(actors) ? (
    <ErrorGamePage />
  ) : (
    <Card>
      <Card.Header>
        Which {correctAnswers} actors were in{" "}
        <i>
          <b>{movieTitle}</b>
        </i>
        ?
      </Card.Header>
      <Card.Body>
        <Form onSubmit={onSubmit}>
          {actors.map((actor) => (
            <Form.Check
              type="checkbox"
              id="checkbox"
              label={actor}
              key={actor}
            />
          ))}
          <Button type="submit">Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

GamePage.propTypes = {
  correctAnswers: PropTypes.number,
  movieTitle: PropTypes.string,
  actors: PropTypes.array,
  onSubmit: PropTypes.func,
};

GamePage.defaultProps = {
  correctAnswers: 3,
  movieTitle: "the same movie",
  actors: [],
  onSubmit: () => {},
};

export default GamePage;
