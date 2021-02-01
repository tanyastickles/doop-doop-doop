import SearchBar from "../components/SearchBar";
import Dropdown from "react-bootstrap/Dropdown";

const handleChange = (event) => {
    const {target: {value}} = event;
    console.log(value);
};

const PickMoviePage = () => {
  return (
  <Dropdown><SearchBar onChange={handleChange} />
  </Dropdown>);
};

export default PickMoviePage;
