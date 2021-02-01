import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";

export const Option = ({ id, title, onClick }) => (
  <Dropdown.Item key={id} onClick={(id) => onClick(id)}>
    {title}
  </Dropdown.Item>
);

Option.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}


const SearchBarOptions = ({ movies, onClick }) => {
  return (
    <>
      {!!movies &&
        movies.map((movie) => (
          <Option id={movie.id} title={movie.title} onClick={onClick} />
        ))}
    </>
  );
};

SearchBarOptions.propTypes = {
  movies: PropTypes.array,
  onClick: PropTypes.func,
};

SearchBarOptions.defaultProps = {
  movies: [],
  onClick: () => {},
};

export default SearchBarOptions;
