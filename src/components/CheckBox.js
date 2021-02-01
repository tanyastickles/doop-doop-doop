import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  // i think there's a bug here where if you click on the label it might call the handler (but not be reflected in the checkbox)
  onClick = () => {
    const isChecked = !this.state.isChecked;
    this.setState({ isChecked: isChecked });
    this.props.onClick(this.props.actor, isChecked);
  };

  render() {
    return (
      <div onClick={this.onClick}>
        <Form.Check type="checkbox" id="checkbox" label={this.props.actor} />
      </div>
    );
  }
}

CheckBox.propTypes = {
  actor: PropTypes.string,
  onClick: PropTypes.func,
};

CheckBox.defaultProps = {
  actor: "",
  onClick: () => {},
};

export default CheckBox;
