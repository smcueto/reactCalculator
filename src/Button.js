import React, { Component } from 'react';


class Button extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onKeyPressed(this.props.text);
  }

  render() {
    return <button onClick={this.onClick}>{this.props.text}</button>;
  }
}

export default Button;
