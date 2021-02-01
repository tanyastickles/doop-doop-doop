import PropTypes from "prop-types";
import FormControl from "react-bootstrap/FormControl";

const SearchBar = ({ onChange }) => {
  return (
      <FormControl
        placeholder="Enter a movie title"
        aria-label="Enter a movie title"
        aria-describedby="Search bar"
        onChange={onChange}
      />
  );
};

SearchBar.propTypes = {
    onChange: PropTypes.func,
};

export default SearchBar;
