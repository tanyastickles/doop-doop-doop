import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import Dropdown from "react-bootstrap/Dropdown";
import { searchMovies } from "../services";
import { formatMovies } from "../utils";

// const handleChange = (event) =>  {
//     const value = event.target.value;

//     if (!value) {
//         return [];
//     }

// }

// const handleChange = ({target: {value}}) =>
//   (value ? searchMovies(value) : [])
//     .then((res) => {
//       const formatted = formatMovies(res);
//     })
//     .catch((error) => console.log(error));

// const PickMoviePage = () => {
//   return (
//     <Dropdown>
//       <SearchBar onChange={handleChange} />
//     </Dropdown>
//   );
// };

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

    searchMovies(value)
      .then((data) => formatMovies(data))
      .then((data) => {
          console.log(data);
          this.setState({ options: data })})
      .catch((error) => {
        this.setState({ options: [] });
      });
  };

  render() {
    return (
      <Dropdown>
        <SearchBar onChange={this.handleChange} />
      </Dropdown>
    );
  }
}

export default PickMoviePage;
